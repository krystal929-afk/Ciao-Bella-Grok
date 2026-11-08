/**
 * Byte-range math shared by the dev/preview server and the Worker.
 * A Range request must answer 206 with only the requested bytes.
 * Advertising Accept-Ranges without slicing is not enough.
 */

/**
 * @param {string | null | undefined} header
 * @param {number} size
 * @returns {{ status: 200 } | { status: 416 } | { status: 206, start: number, end: number }}
 */
export function describeRange(header, size) {
  if (!header || !/^bytes=/i.test(header.trim())) return { status: 200 };
  const spec = header.trim().replace(/^bytes=/i, "").split(",")[0]?.trim() ?? "";
  const match = /^(\d*)-(\d*)$/.exec(spec);
  if (!match) return { status: 200 };
  const startRaw = match[1];
  const endRaw = match[2];
  if (startRaw === "" && endRaw === "") return { status: 200 };

  let start;
  let end;
  if (startRaw === "") {
    const suffix = Number(endRaw);
    if (!Number.isFinite(suffix) || suffix <= 0) return { status: 416 };
    start = Math.max(0, size - suffix);
    end = size - 1;
  } else {
    start = Number(startRaw);
    end = endRaw === "" ? size - 1 : Number(endRaw);
    if (!Number.isFinite(start) || !Number.isFinite(end)) return { status: 200 };
    if (start >= size) return { status: 416 };
    if (end >= size) end = size - 1;
  }
  if (end < start) return { status: 416 };
  return { status: 206, start, end };
}

/** @param {number} size @param {string | null | undefined} header */
export function rangeResponsePlan(size, header) {
  const described = describeRange(header, size);
  if (described.status === 416) {
    return {
      status: 416,
      start: 0,
      end: -1,
      length: 0,
      contentRange: `bytes */${size}`,
    };
  }
  if (described.status === 200) {
    return {
      status: 200,
      start: 0,
      end: size - 1,
      length: size,
      contentRange: null,
    };
  }
  const length = described.end - described.start + 1;
  return {
    status: 206,
    start: described.start,
    end: described.end,
    length,
    contentRange: `bytes ${described.start}-${described.end}/${size}`,
  };
}

/**
 * Read a response body. Cloudflare's asset binding often omits Content-Length,
 * so a range slice has to measure the bytes itself.
 * @param {Response} asset
 * @param {number | undefined} limit stop after this many bytes (exclusive end)
 * @returns {Promise<Uint8Array>}
 */
export async function readResponseBytes(asset, limit) {
  if (!asset.body) return new Uint8Array(0);
  const reader = asset.body.getReader();
  /** @type {Uint8Array[]} */
  const chunks = [];
  let seen = 0;
  try {
    while (limit == null || seen < limit) {
      const { done, value } = await reader.read();
      if (done || !value) break;
      chunks.push(value);
      seen += value.byteLength;
    }
  } finally {
    try {
      await reader.cancel();
    } catch {
      /* stream already closed */
    }
  }
  const merged = new Uint8Array(seen);
  let offset = 0;
  for (const chunk of chunks) {
    merged.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return merged;
}
