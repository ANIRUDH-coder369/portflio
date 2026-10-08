# 🚀 Modern Developer Portfolio

A modern, high-performance personal portfolio web application built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**. Fully static and hardcoded for blazing-fast page loads, high SEO performance, and seamless zero-configuration deployment.

---

## ✨ Features

- **⚡ Blazing Fast & Static Pre-rendering**: 100% static generation (`prerendered`) for instantaneous navigation and optimal Lighthouse scores.
- **🎨 Modern Aesthetic & Dark/Light Mode**: Smooth theme toggling with persistent storage (`localStorage`) and system preference fallback.
- **📱 Fully Responsive**: Pixel-perfect layout tailored for desktop, tablet, and mobile viewports with an intuitive mobile menu drawer.
- **💼 Comprehensive Showcase**:
  - **Hero & About**: Compelling introduction, bio, education history, and interactive tabs.
  - **Skills**: Categorized technology stack with proficiency meters and learning approach insights.
  - **Projects**: 17 curated web & mobile projects with category filters, live demo links, and repository links.
- **🔒 Standalone & Dependency-Light**: Custom-crafted SVG icons eliminating hefty third-party icon bundle overhead.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State & Theming**: React Hooks & CSS Variables

---

## 📂 Project Structure

```text
client/
├── app/
│   ├── about/              # About Me page (Bio, Education, Personal tabs)
│   ├── componets/          # Reusable UI components (Navbar, Footer, Icons)
│   ├── data/               # Centralized static portfolio data (portfolioData.ts)
│   ├── projects/           # Projects catalog with category filters
│   ├── skills/             # Skills page with categorized proficiency metrics
│   ├── globals.css         # Design tokens and theme system
│   ├── layout.tsx          # Root layout with SEO metadata & theme provider
│   └── page.tsx            # Home page with hero, stats, preview sections
├── public/                 # Static assets & favicon
├── next.config.ts          # Next.js build configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.18.0 or later recommended)
- npm, pnpm, or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Production Build

To test and compile the production bundle:

```bash
npm run build
```

To run the production server locally:

```bash
npm run start
```

---

## 🌐 Deployment

This application is optimized for one-click deployment on [Vercel](https://vercel.com):

1. Import your GitHub repository to Vercel.
2. If `client` is a subdirectory, set the **Root Directory** to `client`.
3. Vercel will automatically detect Next.js and build the static output.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
