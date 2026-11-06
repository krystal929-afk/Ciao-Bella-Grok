import { o as __toESM } from "../_runtime.mjs";
import { c as serviceStatus, o as restaurant } from "./restaurant-IoJpytYJ.mjs";
import { t as cn } from "./cn-Ccejyh36.mjs";
import { J as require_react, Y as require_jsx_runtime, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Pause, c as ChevronLeft, i as Phone, n as TriangleAlert, o as Menu, r as Play, s as ChevronRight, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/menus-BlN98K0f.js
var SOCIALS = [
	{
		label: "Facebook",
		href: "https://www.facebook.com/100063594282286"
	},
	{
		label: "Instagram",
		href: "https://www.instagram.com/ciaobellatrattoria"
	},
	{
		label: "Google",
		href: "https://share.google/IWOXZ2PdL2zKv9grN"
	}
];
var HERO_VIDEO = "https://static.spotapps.co/new_website_videos/344525_videos/344525_video_desktop_v3.mp4";
var promos = [
	{
		id: "order",
		title: "Order your favorite dishes in seconds!",
		body: "Pizzas, pastas, and seafood, packed for pickup. Pay when you collect it.",
		cta: "Order pickup",
		href: "/order"
	},
	{
		id: "holiday",
		title: "Holiday Parties",
		body: "The perfect venue for your holiday party. Book your party today.",
		cta: "Book your party",
		href: "/party"
	},
	{
		id: "catering",
		title: "Did you know we do catering?",
		body: "Whatever the occasion, however big or small. Birthdays, holidays, corporate events, wedding festivities, and more.",
		cta: "Catering Packages",
		href: "/catering"
	},
	{
		id: "reserve",
		title: "We are taking reservations!",
		body: "Let’s make sure you get a great table. We recommend booking ahead.",
		cta: "Book Table",
		href: "/reservations"
	},
	{
		id: "memories",
		title: "Turn moments into memories!",
		body: "Birthday, rehearsal dinner, corporate gathering — tell us the date and we’ll take it from there.",
		cta: "Book your party",
		href: "/party"
	}
];
var drinkMenu = [
	{
		id: "red",
		title: "Red",
		items: [
			{
				name: "Cabernet Sauvignon \"Fuga\", Apulia",
				price: "Glass $15.50 · Bottle $57.50",
				description: "Deep ruby color, intense and round, excellent tannins."
			},
			{
				name: "Pinot Noir, Calatroni, Italy",
				price: "Glass $12.50 · Bottle $48",
				description: "Boysenberry, dark cherry, and roasty mocha."
			},
			{
				name: "Chianti Classico DOCG, Nabucco",
				price: "Glass $14.50 · Bottle $55",
				description: "Ripe cherry and strawberry on the nose."
			},
			{
				name: "Supertuscan Origo, Sangiovese/Cabernet",
				price: "Glass $14.50 · Bottle $55",
				description: "Excellent body, matured in small French oak."
			},
			{
				name: "Montepulciano Roma DOC, Poggio Le Volpi",
				price: "Bottle $55",
				description: "Bright ruby, ripe red fruit and cherry."
			},
			{
				name: "Ripasso della Valpolicella, Tinazzi",
				price: "Bottle $55",
				description: "Deep ruby, prunes and cherry. 96 pts."
			},
			{
				name: "Amarone della Valpolicella DOCG, Villa Loren",
				price: "Bottle $96.50",
				description: "Full bodied, elegant tannins, long finish."
			},
			{
				name: "Brunello di Montalcino DOCG, La Togata",
				price: "Bottle $96.50",
				description: "Full-bodied, structured, austere and tannic. 92 pts."
			},
			{
				name: "Barolo DOCG, Tre Pais, Piedmont",
				price: "Bottle $96.50",
				description: "Full ruby, dry, long."
			},
			{
				name: "Barbera d'Asti, Duedu., Piedmont",
				price: "Bottle $48.50",
				description: "Vinous and fruity, with violet."
			}
		]
	},
	{
		id: "white",
		title: "White",
		items: [
			{
				name: "Prosecco Split, 200 ml",
				price: "Glass $10 · Bottle $39.50"
			},
			{
				name: "Prosecco DOC, Nino Ardevi",
				price: "Bottle $49"
			},
			{
				name: "Rosé di Amarone DOP, Campo delle Rose",
				price: "Bottle $49",
				description: "Salmon pink. Raspberry and wild cherry."
			},
			{
				name: "Pinot Grigio delle Venezie, Tinazzi",
				price: "Bottle $49",
				description: "Straw yellow, fruity, floral."
			},
			{
				name: "Sauvignon Blanc, Collevento 921",
				price: "Glass $12.50 · Bottle $49",
				description: "Citrus and a refined finish."
			},
			{
				name: "Falanghina del Benevento, Lava",
				price: "Glass $12.50 · Bottle $49",
				description: "Medium-bodied, intense, persistent."
			}
		]
	},
	{
		id: "impero",
		title: "Impero Premium Collection",
		items: [
			{
				name: "Pinot Grigio",
				price: "Glass $9.99 · Bottle $38"
			},
			{
				name: "Chardonnay",
				price: "Glass $9.99 · Bottle $38"
			},
			{
				name: "Rosé",
				price: "Glass $9.99 · Bottle $38"
			},
			{
				name: "Cabernet",
				price: "Glass $9.99 · Bottle $38"
			},
			{
				name: "Merlot",
				price: "Glass $9.99 · Bottle $38"
			},
			{
				name: "Chianti DOCG",
				price: "Glass $9.99 · Bottle $38"
			}
		]
	},
	{
		id: "hot",
		title: "Hot Drinks",
		items: [
			{
				name: "Espresso",
				price: "$4.99",
				description: "A single shot of Italian espresso."
			},
			{
				name: "Caffè Americano",
				price: "$6",
				description: "Espresso lengthened with hot water."
			},
			{
				name: "Cappuccino",
				price: "$6.99",
				description: "Espresso, steamed milk, and foam."
			},
			{
				name: "Hot Tea",
				price: "$3.99"
			}
		]
	},
	{
		id: "fresh",
		title: "Fresh Drinks",
		items: [
			{
				name: "Red Bull",
				price: "$6",
				description: "The classic Red Bull."
			},
			{
				name: "Canned soda",
				price: "$3.99",
				description: "Cola, diet cola, or lemon-lime."
			},
			{
				name: "Iced Tea",
				price: "$3.99"
			},
			{
				name: "Panna water",
				price: "$3.50"
			},
			{
				name: "San Pellegrino",
				price: "$3.50"
			},
			{
				name: "Beer, domestic",
				price: "$5.95"
			},
			{
				name: "Beer, imported",
				price: "$6.95"
			}
		]
	}
];
var specials = [
	{
		day: "Tuesday",
		title: "Wine Night",
		detail: "Half-price bottles. Glass $7, or $5 paired with a dish or board. Bottle $19. Bottle plus charcuterie board $44.",
		hours: "5:00 PM – 9:00 PM"
	},
	{
		day: "Wednesday",
		title: "Wine Night",
		detail: "Half-price bottles of wine.",
		hours: "5:00 PM – 9:00 PM"
	},
	{
		day: "Thursday",
		title: "Pizza Night",
		detail: "16\" pizza for $15. Dine-in only.",
		hours: "5:00 PM – 9:00 PM"
	}
];
var slides = [
	{
		title: "Gather, Dine, Enjoy",
		href: "/food-menu",
		label: "Our Menu",
		image: "/images/house/slide1.jpg",
		alt: "Clams in white wine with lemon"
	},
	{
		title: "Host And Celebrate",
		href: "/party",
		label: "Book a private party",
		image: "/images/house/slide2.jpg",
		alt: "Arugula salad with feta, tomato, and balsamic"
	},
	{
		title: "Catering With Tradition",
		href: "/catering",
		label: "Inquire about catering",
		image: "/images/house/slide3.jpg",
		alt: "Piccata with capers, lemon, and spaghetti"
	}
];
var gallery = [
	{
		src: "/images/house/g8.jpg",
		alt: "Fried calamari with marinara and lemon"
	},
	{
		src: "/images/house/g1.jpg",
		alt: "Ham and pineapple pizza"
	},
	{
		src: "/images/house/g4.jpg",
		alt: "Prosciutto and arugula pizza"
	},
	{
		src: "/images/house/g3.jpg",
		alt: "Shrimp over pasta"
	},
	{
		src: "/images/house/g6.jpg",
		alt: "Grilled salmon with caprese salad"
	},
	{
		src: "/images/house/g5.jpg",
		alt: "Arugula salad with feta and balsamic"
	},
	{
		src: "/images/house/g7.jpg",
		alt: "Tiramisu"
	},
	{
		src: "/images/house/g2.jpg",
		alt: "Lemon dessert"
	}
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-CDNrVul_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var PROMO_SEEN = "ciaobella-promo-seen";
var PROMO_INDEX = "ciaobella-promo-index";
var LIST_KEY = "ciaobella-newsletter";
function HeroFilm() {
	const videoRef = (0, import_react.useRef)(null);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const video = videoRef.current;
		if (!video) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
	}, []);
	function toggle() {
		const video = videoRef.current;
		if (!video) return;
		if (video.paused) video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
		else {
			video.pause();
			setPlaying(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref: videoRef,
				className: "h-full w-full object-cover",
				poster: "/images/house/hero-poster.jpg",
				muted: true,
				loop: true,
				playsInline: true,
				preload: "metadata",
				src: HERO_VIDEO
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-fg/45" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: toggle,
				"aria-label": playing ? "Pause the decorative video" : "Play the decorative video",
				className: "absolute right-4 top-4 z-10 inline-flex size-11 items-center justify-center rounded-full bg-fg/80 text-bg",
				children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" })
			})
		]
	});
}
function PromoPopup() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [index, setIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (sessionStorage.getItem(PROMO_SEEN) === "1") return;
		const stored = Number(localStorage.getItem(PROMO_INDEX) ?? "0");
		const next = Number.isFinite(stored) ? stored % promos.length : 0;
		setIndex(next);
		const timer = window.setTimeout(() => setOpen(true), 900);
		return () => window.clearTimeout(timer);
	}, []);
	function close() {
		sessionStorage.setItem(PROMO_SEEN, "1");
		localStorage.setItem(PROMO_INDEX, String((index + 1) % promos.length));
		setOpen(false);
	}
	(0, import_react.useEffect)(() => {
		if (!open) return;
		function onKey(event) {
			if (event.key === "Escape") close();
		}
		window.addEventListener("keydown", onKey);
		const previous = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = previous;
		};
	}, [open, index]);
	if (!open) return null;
	const promo = promos[index];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-end justify-center bg-fg/60 p-4 sm:items-center",
		role: "presentation",
		onClick: close,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "promo-title",
			className: "popup-rise w-full max-w-md rounded-md bg-surface p-6 text-fg shadow-lg",
			onClick: (event) => event.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-widest text-primary",
						children: "Ciao Bella"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Close",
						onClick: close,
						className: "inline-flex size-11 items-center justify-center rounded-md border border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "promo-title",
					className: "mt-2 font-display text-3xl leading-tight",
					children: promo.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: promo.body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: [promo.external ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: promo.href,
						target: "_blank",
						rel: "noreferrer",
						onClick: close,
						className: "rounded-md bg-primary px-5 py-3 text-sm text-bg hover:bg-fg",
						children: promo.cta
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: promo.href,
						onClick: close,
						className: "rounded-md bg-primary px-5 py-3 text-sm text-bg hover:bg-fg",
						children: promo.cta
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: close,
						className: "rounded-md border border-border px-5 py-3 text-sm",
						children: "Not now"
					})]
				})
			]
		})
	});
}
function openNewsletter() {
	window.dispatchEvent(new CustomEvent("ciaobella-newsletter"));
}
function NewsletterDialog() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		function onOpen() {
			setDone(false);
			setOpen(true);
		}
		window.addEventListener("ciaobella-newsletter", onOpen);
		return () => window.removeEventListener("ciaobella-newsletter", onOpen);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		function onKey(event) {
			if (event.key === "Escape") setOpen(false);
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-end justify-center bg-fg/60 p-4 sm:items-center",
		onClick: () => setOpen(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "Stay in touch",
			className: "popup-rise w-full max-w-md rounded-md bg-surface p-6",
			onClick: (event) => event.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "Stay in touch"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Close",
					className: "inline-flex size-11 items-center justify-center rounded-md border border-border",
					onClick: () => setOpen(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}), done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted",
				children: "You’re on the list on this device. We’ll treat it as a note to the house — call if you need a table sooner."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-4 grid gap-3",
				onSubmit: (event) => {
					event.preventDefault();
					const data = new FormData(event.currentTarget);
					const email = String(data.get("email") ?? "").trim();
					const existing = JSON.parse(localStorage.getItem(LIST_KEY) ?? "[]");
					localStorage.setItem(LIST_KEY, JSON.stringify([email, ...existing].slice(0, 20)));
					setDone(true);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Specials, holiday parties, and the occasional wine night. No spam folder filler."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							type: "email",
							name: "email",
							className: "mt-1 w-full rounded-md border border-border bg-bg px-3 py-3 text-base"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "rounded-md bg-primary px-5 py-3 text-sm text-bg hover:bg-fg",
						children: "Join the list"
					})
				]
			})]
		})
	});
}
function MomentSlideshow() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [playing, setPlaying] = (0, import_react.useState)(true);
	const slide = slides[index];
	(0, import_react.useEffect)(() => {
		if (!playing) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const timer = window.setInterval(() => setIndex((value) => (value + 1) % slides.length), 5e3);
		return () => window.clearInterval(timer);
	}, [playing]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-fg text-bg",
		"aria-roledescription": "carousel",
		"aria-label": "Highlights",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: slide.image,
					alt: slide.alt,
					className: "aspect-video w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-fg/45" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 flex flex-col justify-end p-6 sm:p-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl",
						children: slide.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: slide.href,
						className: "mt-4 inline-flex w-fit rounded-md bg-bg px-5 py-3 text-sm text-fg",
						children: slide.label
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute right-4 top-4 flex gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Previous slide",
							className: "inline-flex size-11 items-center justify-center rounded-full bg-fg/70",
							onClick: () => setIndex((value) => (value + slides.length - 1) % slides.length),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Next slide",
							className: "inline-flex size-11 items-center justify-center rounded-full bg-fg/70",
							onClick: () => setIndex((value) => (value + 1) % slides.length),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": playing ? "Stop slideshow" : "Start slideshow",
							className: "inline-flex size-11 items-center justify-center rounded-full bg-fg/70",
							onClick: () => setPlaying((value) => !value),
							children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" })
						})
					]
				})
			]
		})
	});
}
function PhotoGallery() {
	const [active, setActive] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (active == null) return;
		function onKey(event) {
			if (event.key === "Escape") setActive(null);
			if (event.key === "ArrowRight") setActive((value) => value == null ? value : (value + 1) % gallery.length);
			if (event.key === "ArrowLeft") setActive((value) => value == null ? value : (value + gallery.length - 1) % gallery.length);
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [active]);
	const photo = active == null ? null : gallery[active];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl",
					children: "Photo gallery"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#after-gallery",
					className: "text-sm text-primary",
					children: "Skip photo gallery"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4",
				children: gallery.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "overflow-hidden rounded-md",
					onClick: () => setActive(index),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.src,
						alt: item.alt,
						className: "aspect-square w-full object-cover"
					})
				}, item.src))
			}),
			photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-fg/80 p-4",
				onClick: () => setActive(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full max-w-3xl",
					onClick: (event) => event.stopPropagation(),
					role: "dialog",
					"aria-modal": "true",
					"aria-label": photo.alt,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: photo.src,
							alt: photo.alt,
							className: "max-h-[70vh] w-full rounded-md object-contain"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-center text-sm text-bg",
							children: photo.alt
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Close gallery",
							className: "absolute right-2 top-2 inline-flex size-11 items-center justify-center rounded-full bg-fg text-bg",
							onClick: () => setActive(null),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Previous photo",
							className: cn("absolute left-2 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-fg text-bg"),
							onClick: () => setActive((value) => value == null ? value : (value + gallery.length - 1) % gallery.length),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Next photo",
							className: "absolute right-2 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-fg text-bg",
							onClick: () => setActive((value) => value == null ? value : (value + 1) % gallery.length),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
						})
					]
				})
			}) : null
		]
	});
}
var links = [
	{
		to: "/food-menu",
		label: "Menu"
	},
	{
		to: "/drink-menu",
		label: "Drinks"
	},
	{
		to: "/specials",
		label: "Specials"
	},
	{
		to: "/reservations",
		label: "Reserve"
	},
	{
		to: "/order",
		label: "Order"
	},
	{
		to: "/catering",
		label: "Catering"
	},
	{
		to: "/party",
		label: "Parties"
	},
	{
		to: "/jobs",
		label: "Jobs"
	}
];
var bottom = [
	{
		label: "Order",
		to: "/order"
	},
	{
		label: "Reserve",
		to: "/reservations"
	},
	{
		label: "Parties",
		to: "/party"
	},
	{
		label: "Catering",
		to: "/catering"
	},
	{
		label: "Jobs",
		to: "/jobs"
	}
];
function SiteChrome({ children }) {
	const path = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	const status = serviceStatus();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-surface focus:px-3 focus:py-2",
				children: "Skip to main content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-fg text-bg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-2 text-xs tracking-wide",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: status.open ? "text-accent" : "text-bg/80",
							children: status.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mx-2 text-bg/40",
							children: "·"
						}),
						restaurant.street,
						", ",
						restaurant.city
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: restaurant.phoneHref,
						className: "inline-flex items-center gap-2 hover:text-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
							className: "size-3.5",
							"aria-hidden": true
						}), restaurant.phoneDisplay]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-border bg-bg/95 backdrop-blur",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-3 leading-none",
							onClick: () => setOpen(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/house/logo.png",
								alt: "",
								className: "size-12 rounded-full"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-2xl text-fg",
								children: "Ciao Bella"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs uppercase tracking-widest text-muted",
								children: "Trattoria · Deerfield Beach"
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex size-11 items-center justify-center rounded-md border border-border lg:hidden",
							"aria-expanded": open,
							"aria-label": open ? "Close menu" : "Open menu",
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mt-3 hidden flex-wrap gap-x-5 gap-y-2 lg:flex",
						"aria-label": "Primary",
						children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							className: cn("text-sm tracking-wide text-muted hover:text-fg", path === link.to && "text-fg", link.to === "/party" && "rounded-md bg-primary px-3 py-2 text-bg hover:bg-fg"),
							children: link.label
						}, link.to))
					})]
				}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "border-t border-border px-4 py-3 lg:hidden",
					"aria-label": "Mobile",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-col",
						children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							className: "block py-3 text-lg",
							onClick: () => setOpen(false),
							children: link.label
						}) }, link.to))
					})
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "content",
				className: "pb-16 lg:pb-0",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-border bg-fg text-bg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl",
								children: "Ciao Bella"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-xs text-sm text-bg/75",
								children: "Old-world Southern Italian cooking on Federal Highway."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: openNewsletter,
								className: "mt-4 text-sm underline decoration-accent underline-offset-4",
								children: "Stay in touch"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "uppercase tracking-widest text-accent",
									children: "Visit"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3",
									children: restaurant.street
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: restaurant.city }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "mt-3 inline-block underline decoration-accent underline-offset-4",
									href: restaurant.maps,
									children: "Get directions"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "uppercase tracking-widest text-accent",
									children: "Dinner"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3",
									children: "Sunday, Tuesday – Saturday, 5–9 PM"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Monday, closed" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "mt-3 inline-block text-bg",
									href: restaurant.phoneHref,
									children: restaurant.phoneDisplay
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "mt-2 block text-bg/80",
									href: restaurant.emailHref,
									children: restaurant.email
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 flex gap-4",
									children: SOCIALS.map((social) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: social.href,
										target: "_blank",
										rel: "noreferrer",
										className: "underline decoration-accent underline-offset-4",
										children: social.label
									}, social.label))
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-bg/15 px-4 py-4 text-center text-xs text-bg/60",
					children: ["Ciao Bella Trattoria · Deerfield Beach. Menu and hours can change — call to confirm.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/desk",
						className: "ml-3 underline decoration-bg/40 underline-offset-4",
						children: "House desk"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Quick actions",
				className: "fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 bg-fg text-bg lg:hidden",
				children: bottom.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					className: "px-1 py-3 text-center text-xs",
					children: item.label
				}, item.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromoPopup, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsletterDialog, {})
		]
	});
}
var styles_default = "/assets/styles-C4utS344.css";
var APP_NAME = "Ciao Bella Trattoria";
var Route$10 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Ciao Bella Trattoria — authentic Italian cooking, pizza, catering, and private parties in Deerfield Beach, Florida."
			},
			{
				name: "theme-color",
				content: "#8c2f39"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,520;0,9..144,640;1,9..144,520&family=Outfit:wght@400;500;600&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteChrome, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$9 = () => import("./routes-iBa8XFs0.mjs");
var Route$9 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./catering-DbYEVGJx.mjs");
var Route$8 = createFileRoute("/catering")({
	head: () => ({ meta: [{ title: "Catering · Ciao Bella Trattoria" }] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./desk-ComvdcHa.mjs");
var Route$7 = createFileRoute("/desk")({
	head: () => ({ meta: [{ title: "House desk · Ciao Bella" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./drink-menu-Dy-7g0R3.mjs");
var Route$6 = createFileRoute("/drink-menu")({
	head: () => ({ meta: [{ title: "Drinks · Ciao Bella Trattoria" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./food-menu-BLOFA9Rq.mjs");
var Route$5 = createFileRoute("/food-menu")({
	head: () => ({ meta: [{ title: "Menu · Ciao Bella Trattoria" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./jobs-C9wo44mt.mjs");
var Route$4 = createFileRoute("/jobs")({
	head: () => ({ meta: [{ title: "Jobs · Ciao Bella Trattoria" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./order-C41PQGMX.mjs");
var Route$3 = createFileRoute("/order")({
	head: () => ({ meta: [{ title: "Pickup · Ciao Bella Trattoria" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./party-CcNa9Z9r.mjs");
var Route$2 = createFileRoute("/party")({
	head: () => ({ meta: [{ title: "Private parties · Ciao Bella Trattoria" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./reservations-D1deNNuJ.mjs");
var Route$1 = createFileRoute("/reservations")({
	head: () => ({ meta: [{ title: "Reservations · Ciao Bella Trattoria" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./specials-CKbxM3y4.mjs");
var Route = createFileRoute("/specials")({
	head: () => ({ meta: [{ title: "Specials · Ciao Bella Trattoria" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$9.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$10
	}),
	CateringRoute: Route$8.update({
		id: "/catering",
		path: "/catering",
		getParentRoute: () => Route$10
	}),
	DeskRoute: Route$7.update({
		id: "/desk",
		path: "/desk",
		getParentRoute: () => Route$10
	}),
	DrinkMenuRoute: Route$6.update({
		id: "/drink-menu",
		path: "/drink-menu",
		getParentRoute: () => Route$10
	}),
	FoodMenuRoute: Route$5.update({
		id: "/food-menu",
		path: "/food-menu",
		getParentRoute: () => Route$10
	}),
	JobsRoute: Route$4.update({
		id: "/jobs",
		path: "/jobs",
		getParentRoute: () => Route$10
	}),
	OrderRoute: Route$3.update({
		id: "/order",
		path: "/order",
		getParentRoute: () => Route$10
	}),
	PartyRoute: Route$2.update({
		id: "/party",
		path: "/party",
		getParentRoute: () => Route$10
	}),
	ReservationsRoute: Route$1.update({
		id: "/reservations",
		path: "/reservations",
		getParentRoute: () => Route$10
	}),
	SpecialsRoute: Route.update({
		id: "/specials",
		path: "/specials",
		getParentRoute: () => Route$10
	})
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { openNewsletter as a, PhotoGallery as i, HeroFilm as n, drinkMenu as o, MomentSlideshow as r, specials as s, router_exports as t };
