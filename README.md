# 🚗 ARC Docs — Autonomous Robotics Carleton  

<p align="center">
  <img src="https://img.shields.io/github/last-commit/Autonomous-Robotics-Carleton/arc-docs?color=blue&style=for-the-badge" />
  <img src="https://img.shields.io/github/contributors/Autonomous-Robotics-Carleton/arc-docs?color=green&style=for-the-badge" />
  <img src="https://img.shields.io/github/issues/Autonomous-Robotics-Carleton/arc-docs?color=orange&style=for-the-badge" />
  <img src="https://img.shields.io/github/issues-pr/Autonomous-Robotics-Carleton/arc-docs?color=purple&style=for-the-badge" />
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" />
</p>

---

<p align="center">
  <img width="3308" height="1350" alt="ARC INSTA BANNER" src="https://github.com/user-attachments/assets/4b4c9acd-6771-452b-a9fa-c6f2cd5e4346" />
</p>

---

Welcome to the **documentation hub** for **ARC (Autonomous Robotics Carleton)**!  
This project is dedicated to documenting everything about building, configuring, and maintaining our **autonomous car** as we prepare for competitions.  

We’re keeping this project **fully open source**, so current and future members — and the wider robotics community — can learn, contribute, and grow with us.  

---

## 📖 What’s Inside  

This repository contains:  
- ✅ **Setup guides** — step-by-step instructions for getting the ARC car up and running.  
- 🛠 **Configuration docs** — details on software, hardware, and environment settings.  
- 📚 **Knowledge base** — collected learnings and resources as the project evolves.  
- 🏎 **Race preparation logs** — documenting our progress on the road to competition.  

---

## 🚀 Getting Started  

1. Clone this repository:  
   ```bash
   git clone https://github.com/arcarleton/arc-docs.git
   cd arc-docs
---

This is an **Nx monorepo**. Documentation source code lives in **`apps/docs/`**.

---

# 🔧 Local Development (for Contributors)

Contributors **do NOT need Docker**.
Docker is used only in production via CI/CD.

---

## 📌 Prerequisites

* **Node.js 20+**
* **Git**

```bash
corepack enable        # activates pnpm (version pinned in package.json)
pnpm install           # installs all workspace dependencies
```

---

## ▶️ Run the Dev Server

```bash
npx nx dev docs        # or: pnpm dev:docs
```

Site is now live at `http://localhost:3000`

---

## 🧪 Lint + Build

```bash
npx nx build docs
npx nx lint docs
```

---

## 2️⃣ Make Your Changes

Docs live in:

```
apps/docs/content/
```

UI + logic:

```
apps/docs/app/
apps/docs/lib/
```

---

## 3️⃣ Test Locally

```bash
pnpm install
npx nx dev docs
```
---

# 🧪 CI/CD Pipeline

This repository uses **GitHub Actions + GitHub Container Registry (GHCR)**.

### 🔹 For every Pull Request:

* Installs dependencies
* Lints the docs
* Builds the site
* Tests Docker build

### 🔹 For every merge to `main`:

* Builds the production Docker image
* Pushes it to GHCR:

  * `ghcr.io/autonomous-robotics-carleton/arc-docs:latest`
  * `ghcr.io/autonomous-robotics-carleton/arc-docs:<commit-sha>`
* ARC infrastructure auto-deploys the new version to **arcarleton.ca** via Watchtower

Contributors never touch Docker.

---

# 🏗 Project Structure

```
arc-docs/                     # Nx monorepo root
├── apps/
│   └── docs/                 # Fumadocs / Next.js docs app
│       ├── app/              # Next.js App Router
│       ├── content/          # MDX documentation pages
│       ├── public/           # Static assets
│       ├── lib/              # Utility functions
│       ├── components/       # React components
│       ├── next.config.mjs
│       └── package.json
├── nx.json                   # Nx workspace config
├── pnpm-workspace.yaml       # pnpm workspace config
├── .github/workflows/        # CI & Docker build pipelines
└── README.md
```

---

# 📘 License

This project is licensed under the **MIT License**.

---

# 🎉 Thanks for Contributing!

Whether you’re fixing typos, writing docs, or creating new tutorials —
**your work helps drive ARC forward.**

If you have questions, open an issue or reach out to the ARC Team!

```
