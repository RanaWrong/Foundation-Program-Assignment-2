# 🎬 Movie Explorer

**Movie Explorer** is a responsive Single Page Application (SPA) built with **React**, **Vite**, and the **TVMaze API**. Browse a catalog of shows, search in real time, and open a details modal for any title — all without page reloads.

- 🔗 **Live demo:** _coming soon_
- 📦 **Repository:** https://github.com/RanaWrong/Foundation-Program-Assignment-2

---

## 🌟 Key Features

- **⚡ SPA navigation**: `react-router-dom` routes between Home (`/`) and Movies (`/movies`); the hero's **Explore Movies** CTA links straight to the catalog.
- **🔎 Real-time search**: Every keystroke queries the TVMaze Search API. In-flight requests are cancelled with `AbortController` so a slow response for an older query can never overwrite newer results; clearing the box restores the full catalog.
- **🖼️ Movie cards**: Poster, title, average rating and premiere date, with a **See Details** button. Shows that TVMaze returns without artwork get an inline placeholder instead of a broken image.
- **✨ Details modal**: Large poster, title, rating, premiere date, genre chips and the full summary.
  - Closes via the ✕ button, a click on the backdrop (clicks inside the card are stopped with `stopPropagation`), or the **Escape** key (listener cleaned up on unmount).
- **⏳ State handling**: Loading indicator while fetching, error message if the API fails, and a "No movies found." empty state.
- **📱 Responsive layout**: CSS Grid adapts from 1 column on mobile to 2 on tablets and 4 on desktop.
- **🎨 Dark cinematic theme** with hover micro-interactions.

---

## 🛠️ Tech Stack

- **Frontend**: React 18 (function components, `useState`, `useEffect`, props, conditional rendering, `.map()`)
- **Routing**: React Router v7 (`react-router-dom`)
- **Build tool**: Vite 5
- **Styling**: Plain CSS — a small set of hand-written, Tailwind-style utility classes in `src/index.css` (no Tailwind dependency or build step)
- **API**: [TVMaze API](https://www.tvmaze.com/api) — `GET /shows` and `GET /search/shows?q=:query`

---

## 📁 Project Structure

The repository root holds this README; the app lives in the `Movie Explorer/` folder.

```text
Movie Explorer/
├── public/
│   ├── _redirects          # Netlify SPA redirect rule
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Footer.jsx      # App name, copyright and attribution
│   │   ├── MovieCard.jsx   # Poster, title, rating, date + "See Details"
│   │   ├── MovieModal.jsx  # Details modal (✕ / backdrop / Escape to close)
│   │   └── Navbar.jsx      # Brand + Home / Movies links
│   ├── pages/
│   │   ├── Home.jsx        # Hero section with "Explore Movies" CTA
│   │   └── Movies.jsx      # Search box, TVMaze fetching, loading/error/empty states, card grid
│   ├── utils/
│   │   └── poster.js       # Poster URL helper with placeholder for shows without images
│   ├── App.jsx             # Router and page layout
│   ├── index.css           # Base styles + utility classes
│   └── main.jsx            # React entry point
├── index.html
├── vercel.json             # Vercel SPA rewrite so /movies works on refresh
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js **20 or newer** (required by React Router 7)
- npm

### Installation
1. Clone the repository and enter the app folder:
   ```bash
   git clone https://github.com/RanaWrong/Foundation-Program-Assignment-2.git
   cd "Foundation-Program-Assignment-2/Movie Explorer"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/`.

4. Build for production (output goes to `dist/`):
   ```bash
   npm run build
   ```

---

## 🌐 Deployment

### Vercel
1. Import the GitHub repository at [vercel.com](https://vercel.com).
2. **Root Directory**: `Movie Explorer`
3. **Framework Preset**: Vite · **Build Command**: `npm run build` · **Output Directory**: `dist`

`vercel.json` rewrites every path to the SPA so `/movies` works on a hard refresh.

### Netlify
1. Connect the repository (or drag-and-drop the built `dist/` folder onto [Netlify Drop](https://app.netlify.com/drop)).
2. **Base directory**: `Movie Explorer` · **Build command**: `npm run build` · **Publish directory**: `Movie Explorer/dist`

`public/_redirects` handles the SPA fallback on Netlify.

---

## 🧪 Manual Test Checklist

- [ ] **Navigation**: "Home" and "Movies" in the navbar change the URL and view without a page reload.
- [ ] **Hero CTA**: "Explore Movies" navigates to `/movies`.
- [ ] **Initial load**: `/movies` shows "Loading movies…" then a grid of shows.
- [ ] **Search**: typing `batman` updates the grid; clearing the box restores the full list; typing quickly never shows results for an older query.
- [ ] **Empty state**: searching `xyzabc123` shows "No movies found."
- [ ] **Error state**: with the network offline, an error message is shown instead of the grid.
- [ ] **Missing artwork**: search `the` — shows without a poster display the placeholder, not a broken image.
- [ ] **Modal**: "See Details" opens the modal with the right show; closes via ✕, backdrop click, and Escape.
- [ ] **Responsive**: grid is 1 column on a phone, 2 on a tablet, 4 on desktop; nothing overflows horizontally.
- [ ] **Deep link**: refreshing on `/movies` in the deployed app does not 404.

---

## 📄 License
Developed for academic and portfolio purposes.
