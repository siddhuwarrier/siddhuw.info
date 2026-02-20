# Run Locally

## Project Note

I am not a frontend developer, and this project was primarily "vibe coded" (much as I hate that term).

## Node Version (NVM)

This project uses the latest Node.js LTS line via `.nvmrc`.

```bash
nvm install
nvm use
node -v
```

Run those commands before installing dependencies.

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build production files:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

Run unit tests:

```bash
npm test
```

## Pages

- Home: `/`
- Contact: `/contact`
- CV: `/cv`

## Source Structure

- `src/pages/`: Astro page templates and routes
- `src/layouts/`: shared Astro layout templates
- `src/components/`: reusable Astro components
- `src/features/navigation/`: navigation data and tests
- `src/styles/tailwind.css`: Tailwind entry file (`@tailwind` directives only)
- `src/config/theme.ts`: default and supported DaisyUI themes

Imports use the `@/` alias mapped to `src/`.

## Theme

- Current default theme: `dracula`
- To change default theme, update `defaultTheme` in `src/config/theme.ts`
- Available themes are listed in:
  - `src/config/theme.ts`
  - `tailwind.config.mjs` under `daisyui.themes`

## Profile Header

- Name and social links shown at the top of every page are configured in `src/config/profile.ts`
- Language can be switched from the dropdown at the top-right of the profile pane

## Translations

- All user-facing strings are externalized into one JSON file per language:
  - `src/i18n/en.json`
  - `src/i18n/hi.json`
  - `src/i18n/de.json`
- Default locale is set in `src/i18n/index.ts` via `defaultLocale`
- Locale routes are available at `/`, `/hi`, and `/de` (including `/contact` and `/cv` variants)
- To add a new language, add a new JSON file and register it in `src/i18n/index.ts`
