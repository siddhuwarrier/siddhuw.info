import { Env } from "./models/env";
import { rateLimit } from "./services/rate-limiter.service";
import { handleContact } from "./handlers/contact.handler";
import { handleHello } from "./handlers/hello.handler";

const ALLOWED_ORIGINS = [
	"https://siddhuw.info",
	"https://www.siddhuw.info",
	"http://localhost:4321",
	"http://localhost:3000",
];

function getCorsHeaders(request: Request): Record<string, string> {
	const origin = request.headers.get("Origin") ?? "";
	if (!ALLOWED_ORIGINS.includes(origin)) return {};
	return {
		"Access-Control-Allow-Origin": origin,
		"Access-Control-Allow-Methods": "GET, POST, OPTIONS",
		"Access-Control-Allow-Headers": "Content-Type",
	};
}

function withCors(response: Response, request: Request): Response {
	const headers = getCorsHeaders(request);
	if (Object.keys(headers).length === 0) return response;
	const patched = new Response(response.body, response);
	for (const [key, value] of Object.entries(headers)) {
		patched.headers.set(key, value);
	}
	return patched;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);

		// CORS preflight
		if (request.method === "OPTIONS") {
			return new Response(null, { status: 204, headers: getCorsHeaders(request) });
		}

		// rate limit
		if (!(await rateLimit(env.api_rate_limiter, url.pathname))) {
			return withCors(new Response("Too many requests", { status: 429 }), request);
		}

		let response: Response;
		switch (url.pathname) {
			case '/contact':
				response = await handleContact(request, env);
				break;
			case '/hello':
				response = await handleHello(request, env);
				break;
			default:
				response = new Response("Not found", { status: 404 });
		}
		return withCors(response, request);
	},
};
