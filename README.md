# Portfolio

Personal portfolio website built with React, Vite, and Tailwind CSS v4.

## Stack

- React 19
- Vite 8
- Tailwind CSS v4

## Getting Started

```bash
npm install
npm run dev
```

## Structure

```
src/
├── App.tsx       # Nav, Hero, About, Experience, Projects, Skills, Contact
├── OutsideOfWork.tsx # Hobbies section (leadership + interests cards)
├── SectionLabel.tsx # Reusable pill-shaped section eyebrow label
├── useInView.ts # Scroll-into-view hook for fade-up animations
├── data.ts # Project, experience, and skills content
└── index.css # Theme variables, fonts, global styles, animations

```
## Sections

- **Hero** — serif name treatment, pastel blobs, pill CTA buttons
- **About** — bio with a color-coded detail card (school, degree, focus, grad year)
- **Experience** — pastel role cards by timeframe
- **Hobbies** — leadership (IUGA PR) and outside-of-work interest cards
- **Projects** — pastel project cards with tag pills and hover lift
- **Skills** — categorized pill tags (languages, frameworks, ML/AI, tools)
- **Contact** — gradient card with email, LinkedIn, and resume links

One thing to flag: the Structure section assumes your file layout matches what we last built together (the 3516d6e + OutsideOfWork merge). If you've made further changes since, let me know and I'll double check the README still matches before you commit it.