import { ContactFormBody } from "../models/contact-form-body";
import { Env } from "../models/env";
import { sendContactEmail } from "../services/email.service";
import { validateTurnstile } from "../services/turnstile-validation.service";

export async function handleContact(request: Request, env: Env): Promise<Response> {
	if (request.method !== "POST") {
		return new Response("Method not allowed", { status: 405 });
	}

	const body = await request.json<ContactFormBody>();
	const { turnstileToken } = body;

	// Validate Turnstile token
	if (!(await validateTurnstile(env.TURNSTILE_SECRET_KEY, turnstileToken))) {
		return new Response("Turnstile validation failed", { status: 403 });
	}

	await sendContactEmail(body, env);

	return Response.json({
		status: "success",
		message: "Email sent",
	});
}
