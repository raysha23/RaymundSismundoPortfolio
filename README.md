# Raymund Sismundo — Personal Portfolio

A modern, responsive personal portfolio built with **React + TypeScript + Vite + Tailwind CSS**.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Type-checks and builds the production site into `dist/` |
| `npm run lint` | Checks the code with oxlint |
| `npm run preview` | Previews the production build locally |

## Customize

**All content is in one file:** `src/data/portfolio.ts`

- Name, role, intro, location, email, and social links
- About paragraphs and focus areas
- Services, projects, skills, experience, education, achievements
- Navigation labels and links

### Placeholders to replace

| Placeholder | Where | Replace with |
| --- | --- | --- |
| Portrait | `src/data/portfolio.ts` → `portrait` | Set to `/images/your-photo.jpg` and add the file in `public/images/` |
| Email | `portfolio.ts` → `email` and `socials` | Your real email address |
| Facebook | `portfolio.ts` → `facebook` and `socials` | Your real profile URL |
| Experience dates | `portfolio.ts` → `experience[].period` | Real dates (currently `20XX`) |
| Résumé | `public/resume/Raymund-Sismundo-Resume.pdf` | Your real PDF (keep the same filename) |
| Project screenshots | `portfolio.ts` → `projects[].screenshot` | Set to `/images/project-name.png` and add the file |
| Contact form | `src/components/Contact.tsx` | Currently UI-only; connect a backend/email service |

While `portrait` and `screenshot` are unset, the site displays clearly labelled, tasteful placeholders — no fake identity or invented project results.

## Project structure

```
public/
├── favicon.svg
└── resume/Raymund-Sismundo-Resume.pdf   # placeholder PDF
src/
├── components/   # Navbar, Hero, About, Services, Projects, modal, Skills, etc.
├── data/         # portfolio.ts — all editable content
├── hooks/        # active-section detection for the nav
├── types.ts      # TypeScript interfaces
├── App.tsx       # section composition
└── index.css     # Tailwind theme + shared component classes
```

## Deploying to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy. No extra environment variables are needed for the current UI.
