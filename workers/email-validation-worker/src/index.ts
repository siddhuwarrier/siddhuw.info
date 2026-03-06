import { Env } from "./models/env";
import { rateLimit } from "./services/rate-limiter.service";
import { handleContact } from "./handlers/contact.handler";
import { handleHello } from "./handlers/hello.handler";


export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);
		
		// rate limit
		if (!(await rateLimit(env.api_rate_limiter, url.pathname))) {
			return new Response("Too many requests", { status: 429 })
		}

		switch (url.pathname) {
			case '/contact':
				return handleContact(request, env);
			case '/hello':
				return handleHello(request, env);
			default:
				return new Response("Not found", { status: 404 })
		}
	},
};
