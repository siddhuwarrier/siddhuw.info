# siddhuw.info

My personal website, built with [Astro](https://astro.build/) and hosted on [Cloudflare Pages](https://pages.cloudflare.com/). Some static assets (e.g. CV PDF) are served from [Cloudflare R2](https://developers.cloudflare.com/r2/).

## Repository structure

| Directory | Purpose | More info |
|-----------|---------|-----------|
| `pages/`  | Astro frontend — templates, components, i18n, styles, and tests | [pages/README.md](pages/README.md) |
| `infra/`  | Terraform configuration for Cloudflare resources (Pages project, DNS, R2 bucket, custom domains) | [infra/README.md](infra/README.md) |

## CI/CD pipeline

### Pull requests

A GitHub Actions workflow (`.github/workflows/ci.yml`) runs on every PR:

- **Frontend (`pages/`)** — installs dependencies, runs ESLint + Prettier checks, builds the Astro site, and runs unit tests.
- **Infrastructure (`infra/`)** — verifies Terraform formatting (`terraform fmt -check -recursive`) and validates the configuration (`terraform validate`).

The PR fails if any of these checks fail.

### Merges to `master`

- **`pages/` changes** — Cloudflare Pages automatically rebuilds and redeploys the site.
- **`infra/` changes** — HCP Terraform (formerly Terraform Cloud) detects the change and applies the Terraform configuration.