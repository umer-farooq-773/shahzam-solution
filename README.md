# Shahzam Solution — Website

Multi-page agency website built with **React + TypeScript + Vite**, **Tailwind CSS v4**, **React Router**, **Framer Motion**, **Lucide**, and **Three.js (React Three Fiber + Drei)** for the hero scene.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
npm run typecheck
```

Requires Node 20+ (developed on Node 22).

## Configure contact details (nothing is invented)

Contact details and social links are **empty by default**; the UI shows "Details coming soon" until you set them. Copy `.env.example` to `.env` and fill in what you have:

```
VITE_SITE_URL=
VITE_CONTACT_EMAIL=
VITE_CONTACT_PHONE=
VITE_CONTACT_LOCATION=
VITE_SOCIAL_GITHUB=
VITE_SOCIAL_X=
VITE_SOCIAL_LINKEDIN=
VITE_SOCIAL_FACEBOOK=
```

Social icons only appear for URLs you set.

## Contact form → Netlify Forms

In production, the contact form submits URL-encoded data to Netlify Forms. Netlify detects the form definition in `public/__forms.html`; the React form and submission use the matching `contact` name and `bot-field` spam honeypot. In local development (`npm run dev`), submissions are mocked because Netlify Forms only processes them on a deployed Netlify site.

Configure form detection and an owner notification for the form named `contact` in the Netlify dashboard. The site does not send visitor confirmation emails.

## Content you should replace

All of this is clearly labelled as demo/placeholder in the UI:

| What | File |
| --- | --- |
| Demo portfolio projects | `src/data/projects.ts` |
| Demo blog articles | `src/data/blog.ts` |
| Sample testimonials | `src/components/sections/HomeSections.tsx` (`sampleTestimonials`) |
| About-page journey timeline (placeholders) | `src/data/about.ts` |
| Services, technologies, FAQ, lifecycle copy | `src/data/*.ts` |

## Assets

Supplied images live in `public/images/`:

| File | Used for |
| --- | --- |
| `logo-horizontal-light.png` | Navbar and footer logo |
| `logo-stacked-light.png` | Lifecycle diagram core, About ecosystem |
| `logo-stacked-color.png` | Favicon (for light backgrounds) |
| `full_stack_hero.png` | Home tech section, WebGL-unavailable hero fallback, social preview |
| `lifecycle.png` | Home lifecycle section, Process page |
| `digital_products.png` | Home "Ideas to Digital Products" section |
| `contact.png` | Contact page |
| `services_showcase.png` | Services page |
| `coding_workspace.png` | About page |

Technology logos come from the open-source `simple-icons` package. It has no AWS mark, so AWS, CI/CD and REST APIs use neutral icons rather than a fabricated logo.

## Structure

```
src/
  app/            App.tsx, router.tsx (lazy, route-level code splitting)
  components/
    layout/       Layout, Footer
    navigation/   Navbar, MobileNavigation
    ui/           Buttons, cards, ContactForm, FAQAccordion, Breadcrumbs, BackToTop, ...
    animations/   ScrollReveal, PageTransition, ParticleField
    sections/     Hero, HeroVisual, LifecycleDiagram, HomeSections
    three/        HeroScene (R3F), ErrorBoundary + WebGL detection
  pages/          one file per route (+ detail templates)
  data/           typed content
  hooks/ lib/ styles/ types/
```

## Routes

`/`, `/about`, `/services`, `/services/:slug`, `/portfolio`, `/portfolio/:slug`, `/technologies`, `/process`, `/contact`, `/blog`, `/blog/:slug`, `/faq`, and a 404 for everything else.

When deploying, configure your host to rewrite unknown paths to `index.html` (SPA fallback) so direct links to deep routes work.

## Motion, 3D and accessibility notes

- One purposeful 3D scene (home hero), lazy-loaded in its own chunk, paused when off-screen, lower DPR on mobile. If WebGL is missing or the scene throws, the supplied hero image is shown instead.
- `prefers-reduced-motion`: page transitions, reveals, particles, orbit and 3D motion are disabled or frozen.
- Skip link, semantic landmarks, one `<h1>` per page, labelled form controls with `aria-invalid`/`role="alert"` errors, keyboard-operable accordion, filters, diagram and mobile menu (Esc closes).
- Unique title, meta description and Open Graph tags per page via `useSeo`.

## Known limits

- Open Graph tags are set client-side; link-preview crawlers that don't run JavaScript will only see the defaults in `index.html`. Use prerendering/SSR if you need per-page previews.
- The privacy note on the contact form is generic; have the wording reviewed against your actual data handling.
- Fonts (Manrope, Inter) load from Google Fonts.
