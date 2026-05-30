# Internshala Clone – Internship Search Page

A pixel-perfect React replication of [Internshala's internship search page](https://internshala.com/internships/) built with **React + Vite**.

## 🔗 Links
- **Live Demo:** [internshala-assignment.vercel.app](https://internshala-assignment.vercel.app)
- **GitHub:** [github.com/AyushMourya43/Internshala-Assignment](https://github.com/AyushMourya43/Internshala-Assignment)

## ✨ Features

- 📋 **Live API Integration** — Fetches real internships from Internshala's API with graceful CORS fallback to mock data
- 🔍 **Client-side Filtering** by:
  - Profile (e.g. Web Dev, Data Science)
  - Location (city or Remote)
  - Work from home / Part-time toggles
  - Duration (1 / 2 / 3 / 6+ months)
  - Minimum Stipend (slider from ₹0 to ₹10K)
- 🔀 **Sort** by Latest, Stipend (High to Low), Duration (Short to Long)
- 📄 **Internship Detail Page** — Click any card to view full details via React Router
- 💀 **Skeleton Loading** — Shimmer placeholder cards while data loads
- 🎨 **Faithful UI** — Closely mirrors Internshala's design system (colors, typography, layout)
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop

## 🛠 Tech Stack

- **React 18** + **Vite**
- **React Router v6** — client-side routing
- **Axios** — API requests
- **CSS Modules** — component-scoped styling

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/AyushMourya43/Internshala-Assignment.git
cd Internshala-Assignment

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Build for Production

```bash
npm run build
```

Output goes to `dist/`.

## 📁 Project Structure
