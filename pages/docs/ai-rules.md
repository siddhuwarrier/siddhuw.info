# AI Working Rules

Last updated: YYYY-MM-DD
Status: Active

## 1) Source of Truth

Before planning or coding, read:

1. `docs/spec.md`
2. `docs/ai-rules.md`

If instructions conflict, call out the conflict and ask one focused clarifying question.

## 2) Collaboration Mode

- Do not write code until the user explicitly asks.
- Start with a short plan before implementation.
- Keep assumptions explicit when requirements are ambiguous.
- Keep responses concise and actionable.

## 3) Scope Control

- Build only what is in current scope.
- Do not add extra features without request.
- Defer future ideas to a "Future Scope" note.

## 4) Cost Constraints

- Prefer free and open-source tools.
- Avoid paid services by default.
- If a paid option is suggested, include a free alternative.

## 5) Technical Preferences

- Primary stack: Astro + TypeScript.
- Styling: Tailwind CSS + daisyUI.
- Deployment: Cloudflare Pages.
- Testing: Vitest
- Do not mix Typescript into HTML page. Keep Typescript files separate for better unit testing.

If suggesting alternatives, explain tradeoffs briefly.

## 6) Change Safety

- Make small, reversible edits.
- Reference all changed file paths.
- Do not remove or rewrite unrelated content.
- Preserve existing project conventions.

## 7) Quality Checks

After making changes:

- Verify build/lint/test commands if available.
- Report results clearly (pass/fail + key errors).
- If checks cannot run, state why and list manual verification steps.

## 8) Documentation Discipline

- Update `docs/spec.md` when requirements or decisions change.
- Add dated entries to Decision Log for major choices.
- Keep docs short, scannable, and current.

## 9) Output Format for Task Briefs

When starting implementation work, provide:

- Objective
- Constraints
- Proposed steps
- Files expected to change
- Success criteria

## 10) Definition of Done (Per Task)

A task is done when:

- Requested scope is complete
- Basic quality checks are run (or limitation documented)
- File changes are listed
- Follow-up options are provided when useful
