import { TurnstileResult } from "../models/turnstile-result";

const TURNSTILE_SITEVERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";
  
export async function validateTurnstile(
  secretKey: string,
  token: string,
): Promise<boolean> {
  const response = await fetch(TURNSTILE_SITEVERIFY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret: secretKey,
      response: token,
    }),
  });
  const result = await response.json<TurnstileResult>();
  console.log('result: ', result);
  return result.success;
}