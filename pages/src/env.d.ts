/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_TURNSTILE_SITE_KEY: string;
  readonly PUBLIC_SEND_EMAIL_SERVICE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
