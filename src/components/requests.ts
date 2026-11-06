import { REQUESTS_KEY, type SavedRequest } from "@/data/restaurant";

export function loadRequests(): SavedRequest[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(REQUESTS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as SavedRequest[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveRequest(entry: SavedRequest) {
  const next = [entry, ...loadRequests()].slice(0, 12);
  window.localStorage.setItem(REQUESTS_KEY, JSON.stringify(next));
  return next;
}
