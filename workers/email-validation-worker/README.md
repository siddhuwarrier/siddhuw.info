## Email Validation Worker

A Cloudflare Worker that validates a Turnstile token and sends a contact form email via Email Routing.

### Setup

```sh
npm install
```

Set the Turnstile secret key:

```sh
npx wrangler secret put TURNSTILE_SECRET_KEY
```

### Development

```sh
npx wrangler dev
```

### Deploy

```sh
npx wrangler deploy
```

### Types

After changing bindings in `wrangler.jsonc`, regenerate types:

```sh
npx wrangler types
```
