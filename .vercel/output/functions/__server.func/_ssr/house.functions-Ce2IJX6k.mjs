import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/house.functions-Ce2IJX6k.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var listOpenings = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("44812bab1d4e4235c7bfdf185cb612cbb5f5b52359e759f5f4c1ea79f8dc9494"));
var bookTable = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("47a875bdcfb02087b97858cdf19bf02bcfd1e8bf9840169e04da3ed2983d957e"));
var placeOrder = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("da9747755a2c31de8da6dfa3920c08a43b2467e9b5df5d2ef076dd6be401ec03"));
var fileInquiry = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("a0c4909c1e2aaf78ea559ae23382ab827c20cd5d1c4aff6c3df06ee88e6b97af"));
var openDesk = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("f4a438359f7b4ea4837ac997682b516de279a710f747a15c970bd1042937b247"));
var setReservationStatus = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("ea27b7f381316176ac1a36cade98ba81bc055216445e4d09a598c8c9b4018424"));
var setOrderStatus = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("a6c56fdca56884f2f256233d9fdf8d563d338566eff6ea9978672a2ba84e7d5d"));
var setInboxStatus = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("d1799ccb17a6b15d59b80b07c5aca93a118571fec2f264118a9f1c401fd9f637"));
//#endregion
export { placeOrder as a, setReservationStatus as c, openDesk as i, fileInquiry as n, setInboxStatus as o, listOpenings as r, setOrderStatus as s, bookTable as t };
