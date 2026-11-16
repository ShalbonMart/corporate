# Shalbon Mart — Premium Website

Premium responsive React + Vite + Tailwind website with GSAP ScrollTrigger animations and shadcn/ui-style components using Radix Slot, class-variance-authority, clsx and tailwind-merge.

## Local setup

Requires Node.js 20 or later.

```bash
npm install
npm run dev
```

Open the local address printed by Vite. Production test:

```bash
npm run build
npm run preview
```

## GitHub + Vercel deployment

1. Create a GitHub repository named `shalbon-mart-premium`.
2. Upload **the contents of this project directory** (package.json must be in repository root).
3. Vercel → Add New → Project → Import Git Repository.
4. Framework Preset: **Vite** (auto-detected).
5. Build command: `npm run build`; Output directory: `dist` (auto-detected).
6. Deploy. Vercel assigns a free `*.vercel.app` domain.

## Customization

- Text and translations: `src/main.jsx` → `copy` object.
- Contact: `src/main.jsx` → WhatsApp, mailto, and phone links.
- Design: `src/style.css` and `tailwind.config.js`.
- Motion: GSAP animation setup in `src/main.jsx`.

The website is a frontend showcase; no login, checkout, admin backend or payment processing is implemented. Contact links open WhatsApp or the user's email app. Theme and language selections are saved locally in the browser.

Note: Vercel Hobby plan usage is subject to Vercel's current non-commercial use restrictions; select an appropriate plan for a commercial production website.
