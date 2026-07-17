# Phan Minh Tri — Portfolio

Personal portfolio. Software Engineer specialising in Flutter (mobile, web, desktop), React, and Android Native.

**Stack:** React 19 · TypeScript · Vite · Tailwind CSS v4 · Motion · React Router

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc -b && vite build
npm run preview
npm run lint
```

## Configuration

Copy `.env.example` to `.env` and set `VITE_GA_MEASUREMENT_ID` to enable Google Analytics. Analytics is skipped entirely when the variable is unset.

## Structure

| Path | Purpose |
| --- | --- |
| `src/App.tsx` | The page: hero, about, experience, projects, skills, contact |
| `src/i18n.ts` | All copy, English + Vietnamese |
| `src/index.css` | Design system — tokens, fonts, utilities, keyframes |
| `src/GlobalNav.tsx` | Language pill + theme toggle |
| `src/ContactPopup.tsx` | Contact nudge, once per session |
| `src/use-seo.ts` | Title, description, canonical, hreflang |

Routes: `/` (English) and `/vi` (Vietnamese). Language is derived from the pathname.

Deploying to a static host requires an SPA rewrite (all paths → `index.html`) so `/vi` resolves on a hard refresh.

## Credits

Built on [cv-santiago](https://github.com/santifer/cv-santiago) by Santiago Fernández (MIT) — the design system, layout, and animation work originate there.
