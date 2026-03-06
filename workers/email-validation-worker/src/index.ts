import { EmailMessage } from "cloudflare:email";
import { createMimeMessage } from "mimetext";
import { ContactFormBody } from "./models/contact-form-body";
import { Env } from "./models/env";
import { rateLimit } from "./services/rate-limiter.service";
import { validateTurnstile } from "./services/turnstile-validation.service";


export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);
		
		// rate limit
		if (!(await rateLimit(env.api_rate_limiter, url.pathname))) {
			return new Response("Too many requests", { status: 429 })
		}

		switch (url.pathname) {
			case '/validate':
				if (request.method !== "POST") {
					return new Response("Method not allowed", { status: 405 });
				}
				return Response.json({status: "success"})
			case '/hello':
				return Response.json({status: "burak-crush-pineapple"})
			default:
				return new Response("Not found", { status: 404 })
		}
		// if (request.method !== "POST") {
		// 	return new Response("Method not allowed", { status: 405 });
		// }

		// const body = await request.json<ContactFormBody>();
		// const { turnstileToken, fromEmail, contactMessage } = body;

		// // Validate Turnstile token
		// if (!(await validateTurnstile(env.TURNSTILE_SECRET_KEY, turnstileToken))) {
		// 	return new Response("Turnstile validation failed", { status: 403 });
		// }

		// // Create MIME message
		// const msg = createMimeMessage();
		// msg.setSender({ name: "Cloudflare E-mailer", addr: "hi@mail.siddhuw.uk" });
		// msg.setRecipient("siddhu@siddhuw.info");
		// msg.setSubject("New contact form submission");
		// msg.addMessage({
		// 	contentType: "text/plain",
		// 	data: `From: ${fromEmail}\n\n${contactMessage}`,
		// });

		// // Send email
		// const message = new EmailMessage(
		// 	"hi@mail.siddhuw.uk",
		// 	"siddhu@siddhuw.info",
		// 	msg.asRaw(),
		// );
		// await env.cloudflare_emailer.send(message);

		// return Response.json({
		// 	status: "success",
		// 	message: "Email sent",
		// });
	},
};
