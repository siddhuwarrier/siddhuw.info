export interface Env {
	DESTINATION_ADDRESS: string;
	TURNSTILE_SECRET_KEY: string;
	cloudflare_emailer: SendEmail;
	api_rate_limiter: RateLimit;
}