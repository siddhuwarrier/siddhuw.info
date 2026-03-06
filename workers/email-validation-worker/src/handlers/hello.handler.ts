import { Env } from "../models/env";

export async function handleHello(request: Request, env: Env): Promise<Response> {
	return Response.json({ status: "alright, mate" });
}
