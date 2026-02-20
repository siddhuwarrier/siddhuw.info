# Personal Website Spec

Last updated: 2026-02-20
Status: Draft

## 1) Goal

Build a personal website that is fast, easy to maintain, and free to host.

## 2) Audience

- Primary: People who want to learn about me
- Secondary: Recruiters, collaborators, and friends

## 3) Current Scope (Now)

- One static `About Me` page
- Mobile-first responsive layout
- Deployed on Cloudflare Pages free tier

## 4) Future Scope (Later)

- Add API calls for dynamic sections (examples: I plan to collect metrics from my firewall into a time series DB and display selected anonymised bits of information)
- Keep architecture simple and free. Prompt me if you want to use a paid service.
- Continue using free or open-source services where possible

## 5) Out of Scope (For Now)

- Authentication
- Database-backed user accounts

## 6) Tech Decisions

- Framework: Astro + TypeScript
- Styling: Tailwind CSS + daisyUI themes
- Hosting: Cloudflare Pages

## 7) Design Direction

- Tone: personal, clear, and approachable
- Keep content easy to scan
- Choose one consistent theme and typography direction
- Ensure good contrast and accessible text sizes

## 8) Content Requirements (About Me)

- Only add boilerplate content to the templates.
- Use separate pages/routes: Home (`/`), Contact (`/contact`), and CV (`/cv`)
- Sidebar includes links to Home, Contact, and CV

## 9) Non-Functional Requirements

- Add instructions for running locally
- Fast page load on mobile and desktop
- No JavaScript errors in browser console
- No logs in browser console
- Semantic HTML and basic accessibility
- Keep bundle size minimal

## 10) Deployment Constraints

- Must run on Cloudflare Pages free tier
- No required paid add-ons

## 11) Acceptance Criteria

- Site builds successfully
- `About Me` page is fully static and responsive
- Theme is consistently applied
- All links work
- Deploy preview and production deployment succeed on Cloudflare Pages

## 12) Definition of Done

- Requirements in sections 3 and 8 are complete
- Acceptance criteria in section 11 pass
- Docs are updated for any decision changes

## 13) Decision Log

- 2026-02-20 0750Z: Initial stack selected: Astro + TypeScript + Tailwind/daisyUI + Cloudflare Pages.
- 2026-02-20 0935Z: Site uses separate static HTML pages for Home, Contact, and CV.
- 2026-02-20 0935Z: Added npm toolchain with Vite + TypeScript + Vitest to avoid manual JS duplication.
- 2026-02-20 1020Z: Replaced HTML-string renderers with Astro page, layout, and component templates.
- 2026-02-20 1125Z: Styling moved to Tailwind + DaisyUI only, with default theme set to Dracula.

## 14) Open Questions

- What exact sections should appear on the About page?
- Which theme should be the default?
- Which APIs should be first in the future phase?
