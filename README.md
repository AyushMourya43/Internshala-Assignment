# Internshala Clone – Internship Search Page

A React replication of [Internshala's internship search page](https://internshala.com/internships/) built with **React + Vite**.

## Features

- 📋 Lists internships fetched from Internshala's API (falls back to mock data if CORS blocks the request)
- 🔍 Client-side filtering by:
  - **Profile** (e.g. Web Dev, Data Science)
  - **Location** (city or Remote)
  - **Duration** (1 / 2 / 3 / 6+ months)
  - **Stipend** (minimum ₹ threshold)
- 🎨 UI closely mirrors Internshala's design
- 📱 Responsive layout

## Getting Started

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/internshala-clone.git
cd internshala-clone

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
```

Output goes to `dist/`.

## Deployment (Vercel)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your GitHub repo
3. Vercel auto-detects Vite — click **Deploy**
4. Done! Your app is live.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Top navigation bar
│   ├── FilterPanel.jsx     # Sidebar filter controls
│   ├── InternshipCard.jsx  # Individual internship card
│   └── InternshipList.jsx  # List + loading/empty states
├── hooks/
│   └── useInternships.js   # Data fetching + API parsing
├── utils/
│   └── filters.js          # Pure filter logic
├── App.jsx                 # Root layout
└── main.jsx                # Entry point
```

## Note on API & CORS

The Internshala API (`https://internshala.com/hiring/search`) is fetched directly.
In production browsers, CORS headers may block this request — the app gracefully
falls back to realistic mock data in that case.

To bypass CORS during local development, the Vite dev server proxies `/api` → `https://internshala.com`.
