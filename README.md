# PSecLab Website | Penn Systems & Security Lab

Official repository and website source for **PSecLab** (Systems & Security Research Group).
Hosted live at: **[https://pseclab.github.io](https://pseclab.github.io)**

---

## 🚀 Technology Stack

- **Base Framework**: [Vite](https://vitejs.dev/) + [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with cyber/dark theme & responsive typography
- **Interactivity & 3D**: [Three.js](https://threejs.org/) for the dynamic interactive hero network visualization
- **Icons**: [Lucide React](https://lucide.dev/)
- **Hosting & CI/CD**: [GitHub Pages](https://pages.github.com/) via GitHub Actions (`.github/workflows/deploy.yml`)

---

## 📁 Project Architecture & Data Management

Adding new publications, lab members, research thrusts, or news updates is as simple as editing JSON files in `src/data/`:

```
lab-website/
├── .github/
│   └── workflows/
│       └── deploy.yml      # Automated GitHub Pages CI/CD workflow
├── src/
│   ├── components/         # Hero3D, Navbar, Footer, PaperCard, MemberCard, ProjectCard, NewsSection, etc.
│   ├── data/
│   │   ├── members.json    # Students, PI, postdocs, alumni, contacts & photos
│   │   ├── papers.json     # BibTeX citations, abstracts, PDFs, code links, awards
│   │   ├── projects.json   # Research thrusts, grants, open-source software tools
│   │   └── news.json       # Announcements, paper acceptances, awards
│   ├── styles/
│   │   └── index.css       # Tailwind CSS directives and custom glow styling
│   ├── App.jsx             # Main interactive application layout
│   └── main.jsx
├── public/                 # Static assets, PDFs, images
├── package.json
└── vite.config.js
```

---

## 🛠️ Local Development

### 1. Prerequisites
Ensure you have **Node.js (>= 18.x)** and **npm** installed:
```bash
node -v
npm -v
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Local Dev Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```
Outputs static HTML, CSS, and JS bundles into the `dist/` folder.

---

## 📝 How to Update Lab Data

### Adding a New Paper
Add an entry to [`src/data/papers.json`](src/data/papers.json):
```json
{
  "id": "paper-slug",
  "title": "Your Paper Title",
  "authors": "Author 1, Author 2, Lab PI",
  "venue": "IEEE S&P 2026",
  "year": 2026,
  "award": "Best Paper Award",
  "highlight": true,
  "tags": ["Binary Analysis", "Systems Security"],
  "abstract": "Summary abstract here...",
  "pdfUrl": "https://arxiv.org/...",
  "codeUrl": "https://github.com/PSecLab/...",
  "bibtex": "@inproceedings{...}"
}
```

### Adding / Updating Members
Add an entry to [`src/data/members.json`](src/data/members.json):
```json
{
  "id": "phd-john",
  "name": "Jane Doe",
  "role": "Ph.D. Student",
  "category": "phd", // "pi" | "phd" | "ms_bs" | "alumni"
  "affiliation": "Penn State University",
  "avatar": "https://example.com/photo.jpg",
  "bio": "Researching hardware enclaves and system verification.",
  "researchInterest": ["TEE", "Hardware Security"],
  "email": "jane@pseclab.org",
  "github": "https://github.com/...",
  "googleScholar": "https://scholar.google.com/..."
}
```

### Adding a News Milestone
Add an entry to [`src/data/news.json`](src/data/news.json):
```json
{
  "id": "news-2025-spring",
  "date": "May 2025",
  "title": "Paper Accepted to USENIX Security '25!",
  "category": "Paper Award",
  "description": "Our paper on protocol verification was accepted.",
  "link": "#publications"
}
```

---

## ⚙️ Automated GitHub Pages Deployment

This repository uses **GitHub Actions** to automatically build and deploy the site upon any push to `main`.

### Enabling GitHub Pages in Repository Settings:
1. Go to repository **Settings** → **Pages** (`https://github.com/PSecLab/PSecLab.github.io/settings/pages`).
2. Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. Push changes to `main`. The `.github/workflows/deploy.yml` workflow will trigger and publish the website to `https://pseclab.github.io`.

---

## 📄 License
PSecLab Research Group. All rights reserved.
