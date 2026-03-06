// rate limit
export async function rateLimit(rateLimiter: RateLimit, key: string): Promise<boolean> {
	const { success } = await rateLimiter.limit({ key });
	return success;
}
