import { EmailMessage } from "cloudflare:email";
import { createMimeMessage } from "mimetext";
import { ContactFormBody } from "../models/contact-form-body";
import { Env } from "../models/env";

export async function sendContactEmail(body: ContactFormBody, env: Env): Promise<void> {
	const { fromEmail, contactMessage } = body;
	// Create MIME message
	const msg = createMimeMessage();
	msg.setSender({ name: "Cloudflare E-mailer", addr: "hi@mail.siddhuw.uk" });
	msg.setRecipient(env.DESTINATION_ADDRESS);
	msg.setSubject("New contact form submission");
	msg.addMessage({
		contentType: "text/plain",
		data: `From: ${fromEmail}\n\n${contactMessage}`,
	});

	// Send email
	const message = new EmailMessage(
		"hi@mail.siddhuw.uk",
		"siddhu@siddhuw.info",
		msg.asRaw(),
	);
	await env.cloudflare_emailer.send(message);
}
