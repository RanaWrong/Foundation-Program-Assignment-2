# 🎬 Movie Explorer

**Movie Explorer** is a responsive, modern Single Page Application (SPA) built with **React**, **Vite**, and the **TVMaze API**. It allows movie lovers to discover trending titles, search through extensive catalogs in real time, view detailed information in a modal window, and navigate seamlessly without page reloads.

---

## 🌟 Key Features

- **⚡ Fast SPA Navigation**: Powered by `react-router-dom` with smooth routing between Home (`/`) and Movies (`/movies`).
- **🔎 Real-time Search**: Search TV shows and movies directly using the TVMaze Search API with live updates.
- **🖼️ Rich Movie Cards**: Displays high-resolution posters, titles, average ratings, release dates, and genres.
- **✨ Interactive Details Modal**:
  - Displays full overview, release date, genres, average rating, and HTML summary.
  - Closes on **backdrop click** without closing when clicking inside the modal (`stopPropagation`).
  - Closes with keyboard **`Escape`** key listener (with automatic cleanup).
- **⏳ Comprehensive State Handling**:
  - **Loading state**: Clear indicator while API data is fetching.
  - **Error state**: Graceful error message if the API request fails.
  - **Empty state**: Friendly notification when a search query yields no results.
- **📱 Fully Responsive Design**: Seamless grid layout adapting from 1 column on mobile to 2 on tablets and 4 on desktop screens.
- **🎨 Cinematic Aesthetic**: Sleek dark-mode color palette, translucent glassmorphism accents, and smooth hover micro-animations.

---

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Routing**: React Router (`react-router-dom`)
- **Build Tool**: Vite
- **Styling**: CSS3 with utility classes
- **API**: [TVMaze API](https://www.tvmaze.com/api) (`GET /shows`, `GET /search/shows?q=`)

---

## 📁 Project Structure

```text
Movie Explorer/
├── public/
│   ├── _redirects          # Netlify SPA redirect rule
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Footer.jsx      # Footer with attribution & copyright
│   │   ├── MovieCard.jsx   # Individual responsive movie card
│   │   ├── MovieModal.jsx  # Detailed show modal with Escape & backdrop click
│   │   └── Navbar.jsx      # Navigation bar with SPA Link components
│   ├── pages/
│   │   ├── Home.jsx        # Landing page with cinematic hero & featured picks
│   │   └── Movies.jsx      # Search catalog, API integration & state handling
│   ├── App.jsx             # Main Router & layout wrapper
│   ├── index.css           # Design tokens, typography & utility classes
│   └── main.jsx            # React root entry point
├── vercel.json             # Vercel SPA rewrite configuration
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (version `18.x` or higher recommended)
- npm

### Installation
1. Clone or extract the repository:
   ```bash
   git clone <repo-url>
   cd "Movie Explorer"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173/`.

4. Build for production:
   ```bash
   npm run build
   ```

---

## 🌐 Deployment

### Deploying to Vercel
1. Install the Vercel CLI or link via GitHub at [vercel.com](https://vercel.com).
2. Framework Preset: `Vite`
3. Root Directory: `Movie Explorer` (or project root)
4. Build Command: `npm run build`
5. Output Directory: `dist`
*Note: `vercel.json` is pre-configured to ensure subroutes like `/movies` reload properly.*

### Deploying to Netlify
1. Drag and drop the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop) or connect via GitHub.
2. Build Command: `npm run build`
3. Publish Directory: `dist`
*Note: `public/_redirects` is pre-configured to handle SPA client-side routing.*

---

## 🧪 Testing Checklist

- [x] **Navigation**: Clicking "Home" and "Movies" updates the URL and view without page reloads.
- [x] **Hero CTA**: Clicking "Explore Movies" on the landing page navigates to `/movies`.
- [x] **Search**: Typing `batman` queries the API and updates the card list; clearing it restores default shows.
- [x] **Empty State**: Searching `xyzabc123` displays "No movies found."
- [x] **Modal Open**: Clicking "See Details" opens the modal with the correct movie information.
- [x] **Modal Close (Button)**: Clicking `✕` closes the modal.
- [x] **Modal Close (Backdrop)**: Clicking outside the modal card closes it.
- [x] **Modal Close (Keyboard)**: Pressing `Escape` closes the modal.
- [x] **Responsiveness**: Grid smoothly shifts from 1 column on mobile to 2 columns on tablet and 4 columns on desktop.

---

## 📄 License
This project was developed for academic and portfolio purposes.
