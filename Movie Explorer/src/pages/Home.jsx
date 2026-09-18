import { useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

const defaultFeatured = [
  {
    id: 1,
    name: "Interstellar Odyssey",
    rating: { average: 8.9 },
    premiered: "2024",
    genres: ["Sci-Fi", "Adventure"],
    summary: "<p>A team of explorers travel through a newly discovered wormhole in an effort to ensure humanity's survival.</p>",
    image: {
      medium: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=900&q=80",
      original: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
    },
  },
  {
    id: 2,
    name: "Neon Nights",
    rating: { average: 8.4 },
    premiered: "2023",
    genres: ["Action", "Thriller"],
    summary: "<p>In a rain-slicked cyberpunk metropolis, a lone detective unravels a corporate conspiracy that threatens the underground network.</p>",
    image: {
      medium: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=900&q=80",
      original: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80",
    },
  },
  {
    id: 3,
    name: "Echoes of Eternity",
    rating: { average: 9.1 },
    premiered: "2024",
    genres: ["Drama", "Romance"],
    summary: "<p>Generations intertwine as a family legacy unfolds across three continents in this emotionally sweeping masterpiece.</p>",
    image: {
      medium: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80",
      original: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
    },
  },
];

function Home() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <>
      <section
        className="min-h-[80vh] flex items-center justify-center bg-cover bg-center text-white px-6 text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba')",
        }}
      >
        <div className="max-w-3xl mx-auto py-16">
          <p className="text-yellow-400 uppercase tracking-widest text-sm font-semibold mb-3">
            Now Streaming
          </p>

          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
            Find the next title worth your night.
          </h1>

          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Explore standout stories, cinematic worlds, and unforgettable
            performances from across sci-fi, drama, animation, and action.
          </p>

          <Link
            to="/movies"
            className="inline-block bg-yellow-400 text-black px-8 py-3.5 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Explore Movies
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Featured Picks</h2>
            <p className="text-gray-400 text-sm mt-1">Trending this week</p>
          </div>

          <Link
            to="/movies"
            className="text-yellow-400 hover:underline text-sm font-medium"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {defaultFeatured.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onDetails={(movie) => setSelectedMovie(movie)}
            />
          ))}
        </div>
      </section>

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </>
  );
}

export default Home;
