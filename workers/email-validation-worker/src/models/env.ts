export interface Env {
	TURNSTILE_SECRET_KEY: string;
	cloudflare_emailer: SendEmail;
	api_rate_limiter: RateLimit;
}