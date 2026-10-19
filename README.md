# Jat Law Professional Corporation: website

Next.js 15 (App Router) + TypeScript + Tailwind CSS 3 + Framer Motion + Lucide icons.
Montserrat for headings, Open Sans for content, loaded with `next/font` (no layout shift, no external requests at runtime).

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (run this once before your first deploy)
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel choose **Add New > Project**, import the repo. Framework (Next.js) and build settings are detected automatically.
3. Add the environment variables below (**Settings > Environment Variables**), then deploy.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public URL, used for canonical links, sitemap and social previews. Defaults to `https://www.jatlawpc.com`. |
| `RESEND_API_KEY` | Enables the contact form. Create a key at [resend.com](https://resend.com). |
| `CONTACT_TO_EMAIL` | Inbox that receives enquiries. Defaults to `info@jatlawpc.com`. |
| `CONTACT_FROM_EMAIL` | Sender, e.g. `Jat Law Website <website@jatlawpc.com>`. The domain must be verified in Resend. |

Until `RESEND_API_KEY` is set the form shows a clear error with the phone number and email instead of silently pretending to send.
While testing, Resend's `onboarding@resend.dev` sender can only deliver to the email address on your Resend account.
The form includes a honeypot field and server-side validation. For heavier spam protection add a CAPTCHA or rate limit.

## Where to change things

| To change | Edit |
| --- | --- |
| Phone, email, address, hours, navigation, "why us" points | `lib/site.ts` |
| Service titles and all service-page copy, FAQs, process steps | `lib/services.ts` |
| Reviews (verbatim) and star rating | `lib/reviews.ts` |
| Page layouts and copy | `app/**/page.tsx` |
| Colours, fonts, shadows, 3D utilities | `tailwind.config.ts`, `app/globals.css` |
| Logo files | `public/logo.png` (for light backgrounds), `public/logo-light.png` (for dark backgrounds) |

Adding a service: add one object to `lib/services.ts`. Its page, menu entry, footer form option and sitemap entry are generated automatically.

## Design system in brief

* **Colour tones.** Every section picks one tone (`navy`, `blue`, `gold`, `ivory`, `champagne`, `sky`) via `<Section tone="...">`. Each tone sets CSS variables, so cards, buttons and text adapt automatically. Sections sit edge to edge with no gaps, and no two neighbouring sections on a page share a tone.
* **Signature angle.** The slanted top edge of the logo's gold pillars is reused for section seams (`.slant-top`), cards (`.slab-shape`) and the 3D pillars.
* **3D.** `components/three-d/`: `Extrude` (real thickness from stacked layers), `Tilt` (pointer tilt and sheen), `Slab` (the standard card), `Scene3D` (perspective stage), `PillarScene` and `Emblem`.
  Keep `opacity`, `filter` and `overflow` off any element that is itself `preserve-3d`, or the browser flattens the 3D.
* **Motion.** Gentle slide-and-fade on first scroll into view (`Reveal`, `Stagger`), spring physics on hover (`lib/motion.ts`). `prefers-reduced-motion` is honoured globally, and tilt is disabled on touch.
* **Guidance.** The slim rail on the right of wide screens lists the sections of the current page and tracks your position.

## Content notes

* Marketing copy, service descriptions and FAQs were drafted for this site. Please review them, along with the testimonials, against the Law Society of Ontario's advertising rules before launch.
* Reviews are reproduced exactly as supplied. All are shown with five stars, which is an assumption; change `rating` in `lib/reviews.ts` if any differ.
* No credentials, years of experience or statistics were invented. Add them (for example a short bio on the About page) once confirmed.
* No analytics or cookies are included.
