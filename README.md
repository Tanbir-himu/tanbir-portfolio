# Tanbir — Portfolio

A production-ready personal portfolio for Md Tanbir Hossen Joy, built with Next.js 14 (App Router), TypeScript, Tailwind CSS 4, Framer Motion, and a Three.js particle scene.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To test the production build:

```bash
npm run build
npm run start
```

## Editing content

All editable copy lives in **`data/profile.json`** — every field is commented with what it controls. You do not need to touch component code to update text.

- **Hero** — `hero.title`, `hero.subtitle`, `hero.description`, CTA labels
- **About** — `about.paragraphs` (array of strings, one per paragraph) and `about.stats` (the four glass cards)
- **Skills** — `skills.items`: add a new object `{ "name", "description", "icon" }` to add a skill card. `icon` must be a valid [Lucide icon name](https://lucide.dev/icons/) (PascalCase, e.g. `"Sparkles"`).
- **Experience** — `experience.items`: add a new object to add a timeline entry. Entries render most-recent-first in the order you list them. `status` is optional (e.g. `"In Progress"`); set to `null` to omit the badge.
- **Projects** — `projects.items`: add a new object `{ "title", "category", "description", "tags" }` to add a project card.
- **Contact** — `contact.email`, `contact.linkedin`, `contact.location`, `contact.availability`, and `contact.formspreeEndpoint`.
- **Footer / Socials** — `footer` and `socials`.

## Adding a blog post

1. Create a new `.mdx` file in `content/blog/`, e.g. `content/blog/my-new-post.mdx`.
2. Add frontmatter at the top:

   ```md
   ---
   title: "Your Post Title"
   date: "2026-09-01"
   category: "Career"
   excerpt: "A short one-sentence summary shown on the blog cards."
   ---

   Your Markdown/MDX content starts here.
   ```

3. Save — the post is automatically picked up on the `/blog` listing page, the homepage blog preview, and gets its own page at `/blog/my-new-post`, plus a `sitemap.xml` entry.

## Updating the resume

Replace `public/resume/Tanbir_Resume.pdf` with your real resume PDF, keeping the same filename (or update the `href` in `components/layout/Navbar.tsx` if you rename it). The current file is a placeholder.

## Setting up the contact form (Formspree)

1. Create a free account at [formspree.io](https://formspree.io) and create a new form.
2. Copy your form endpoint, e.g. `https://formspree.io/f/abcd1234`.
3. Paste it into `data/profile.json` under `contact.formspreeEndpoint`.
4. Redeploy. Submissions will now arrive in your Formspree inbox and trigger the success/error toast on the site.

## Favicon & Open Graph image

These are generated dynamically at build time via Next.js's `ImageResponse` API — see `app/icon.tsx` (browser tab icon) and `app/opengraph-image.tsx` (social share preview card). Edit those files directly to change colors/text; no binary image asset needs to be replaced.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new), import the repository, and accept the default Next.js build settings.
3. No environment variables are required for a basic deploy — the site is fully static-content driven (JSON + MDX), with the contact form calling Formspree directly from the browser.
4. After deploying, update `data/profile.json` → `contact.formspreeEndpoint` (see above) and `site.url` to your live Vercel URL, then redeploy for correct SEO/OG metadata.

## Tech stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS 4
- Framer Motion (scroll reveals, hover states, page transitions)
- Three.js via `@react-three/fiber` / `@react-three/drei` (hero particle scene, lazy-loaded client-side only)
- Lucide React icons
- MDX blog via `next-mdx-remote` + `gray-matter`
- Vercel Analytics

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (disables animations site-wide).
- Cursor glow effect is disabled on touch devices and when reduced motion is preferred.
- Particle count in the hero scene automatically drops on small viewports for performance.
- Semantic HTML, skip-to-content link, and visible focus states throughout.
