# Lucky Developments — Personal Portfolio Site

> The personal portfolio and community hub for **Lucky**, a solo developer from Australia specialising in Lua/GLua, Discord bots, and full-stack web development.

**Live site:** [luckydev.xyz](https://luckydev.xyz)

---

## About

This is the source for the Lucky Developments website — a single-page portfolio built with Nuxt 4 and Nuxt UI. It showcases projects, skills, services, and contact info, with a custom binary-rain canvas animation as the background.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Nuxt 4](https://nuxt.com) |
| UI Library | [@nuxt/ui](https://ui.nuxt.com) v4 |
| Styling | Tailwind CSS + custom CSS |
| Fonts | JetBrains Mono, Sora (Google Fonts) |
| Runtime | Node.js ≥ 18 |
| Deployment | Docker |

---

## Project Structure

```
luckydev/
├── assets/
│   └── css/
│       └── main.css        # Global styles, custom CSS variables
├── public/
│   ├── favicon.ico
│   └── images/             # Static images and avatars
├── app.vue                 # Main single-page app component
├── app.config.ts           # Nuxt UI theme config (colours, variants)
├── nuxt.config.ts          # Nuxt configuration, SEO meta, head tags
├── Dockerfile              # Multi-stage Docker build
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js **≥ 18.0.0**
- npm

### Install & Run (Development)

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev
```

### Build for Production

```bash
# Build the app
npm run build

# Start the production server
npm start
```

### Static Generation

```bash
npm run generate
```

---

## Docker

A multi-stage Dockerfile is included for containerised deployments.

```bash
# Build the image
docker build -t luckydev-site-nuxt .

# Run the container
docker run -p 3000:3000 luckydev-site-nuxt
```

The production container listens on **port 3000**.

---

## Sections

The site is a single-page layout with the following sections:

- **Hero** — Introduction and call-to-action buttons
- **About** — Bio and language/skill badges
- **Skills** — Languages, tools, and technologies
- **Services** — What's on offer (custom scripts, bots, web dev)
- **Projects** — Showcase of past and current work
- **Contact** — Ways to get in touch

---

## License

See [LICENSE.md](./LICENSE.md) for full terms.