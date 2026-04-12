# Megatherium Company Website

Marketing website for Megatherium, a software consultancy focused on software engineering, cloud and DevOps, and enterprise AI integration.

## Overview

This repo contains a single-page React site built to present Megatherium's services, delivery approach, testimonials, FAQ, and contact form.

The site is currently a frontend-only application. The contact form shows a successful submission state in the UI, but it does not send data to a backend or third-party service yet.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Framer Motion

## Sections

- Hero
- Tech stack
- Services
- How we work
- Why Megatherium
- Testimonials
- FAQ
- Contact / CTA

## Project Structure

```text
src/
  App.tsx
  main.tsx
  index.css
  components/
    Navbar.tsx
    Hero.tsx
    TechStack.tsx
    Services.tsx
    HowWeWork.tsx
    WhyUs.tsx
    Testimonials.tsx
    FAQ.tsx
    CTA.tsx
    Footer.tsx
public/
  favicon.svg
  og-image.png
  og-image.svg
```

## Development

### Requirements

- Node.js 20+
- npm

This repo includes an `.nvmrc` file and is currently set up for Node 22. If you use `nvm`, run:

```bash
nvm use
```

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Notes

- The README now reflects the actual project rather than the default Vite template.
- Several UI elements use placeholder/demo content, including some profile images.
- If this site is meant to collect leads, the next practical step is wiring the form in `src/components/CTA.tsx` to an API endpoint, email service, or CRM.
