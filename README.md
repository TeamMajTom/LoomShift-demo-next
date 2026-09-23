# LoomShift-demo-next

A Next.js resume/portfolio site with a Home page (bio, work history, skills,
resume download) and a Portfolio page (projects grid).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site. `npm run build` produces a
production build; `npm run start` serves it; `npm run lint` runs ESLint.

## Publishing the site

The app is a standard Next.js project, so it can be published with any
Next.js-compatible host without extra configuration:

1. **Vercel (recommended)** — [import the repository](https://vercel.com/new)
   into Vercel. It detects Next.js automatically; no config file is needed.
   Every push to `main` gets deployed and given a public URL.
2. **Netlify** — create a new site from this repository. Netlify's
   [Next.js Runtime](https://docs.netlify.com/frameworks/next-js/overview/)
   handles the build (`npm run build`) automatically.

Once connected, the host assigns a public URL (e.g.
`https://<project>.vercel.app`) where the Home and Portfolio pages and the
resume download (`/resume.pdf`) are reachable.

## Content status

Real resume content, project descriptions, and images are not ready yet.
Until they are provided, the initial version will ship with placeholder
content:

- **Resume**: generic placeholder bio, work history, and skills list.
- **Projects**: 2–3 sample project entries with lorem-ipsum descriptions.
- **Images**: royalty-free stock/avatar placeholder images.

Placeholder content is isolated in [`content/site.ts`](content/site.ts) so it
can be swapped for real content later without code changes. Update
`public/resume.pdf` with the real resume file when it becomes available.