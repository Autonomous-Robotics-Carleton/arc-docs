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

All documentation source code lives inside the **`2025/` directory**.

---

# 🔧 Local Development (for Contributors)

Contributors **do NOT need Docker**.
Docker is used only in production via CI/CD.

Everything you need is inside the **2025/** project.

---

## 📌 Requirements

Install:

* **Node.js 20**
* **pnpm** (via Corepack)
* **Git**

Enable pnpm if needed:

```bash
corepack enable
```

---

## 🛠 Install Dependencies

```bash
cd 2025
pnpm install
```

This uses `pnpm-lock.yaml` to ensure all contributors use identical dependency versions.

---

## ▶️ Run the Dev Server

```bash
pnpm dev
```

Site is now live at:

```
http://localhost:3000
```

---
## ⚠️Common Issue: `pnpm env use` Not Working
some contributors will see this error:

```bash
ERR_PNPM_CANNOT_MANAGE_NODE
Unable to manage Node.js because pnpm was not installed using the standalone installation script.
```
This happens because:

If pnpm was installed using apt / dnf / brew / the system package manager,
→ pnpm cannot manage Node versions.

pnpm env use <version> only works when pnpm is installed via its standalone installer.

To fix this, contributors have two options:

### ✅ Option 1 — Easiest: Use NVM (Recommended)

If you have pnpm installed via your OS (e.g., Fedora, Ubuntu), use NVM to control Node versions.

```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.nvm/nvm.sh

# Install Node.js 20 (required for this repo)
nvm install 20
nvm use 20

```
Verify 
```bash
node -v   # should show v20.x.x

```
---

## 🧪 Lint + Build

```bash
pnpm lint
pnpm build
```

---
## 2️⃣ Make Your Changes

Docs live in:

```
2025/content/
```

UI + logic:

```
2025/app/
2025/lib/
```

---

## 3️⃣ Test Locally

```bash
pnpm install
pnpm dev
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
arc-docs/
│
├── 2025/                 # All documentation source code
│   ├── app/              # Next.js app directory
│   ├── content/          # MDX documentation pages
│   ├── public/           # Static assets
│   ├── lib/              # Utility functions
│   ├── next.config.ts
│   ├── tailwind.config.ts
│   └── package.json
│
├── .github/workflows/    # CI & Docker build pipelines
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
