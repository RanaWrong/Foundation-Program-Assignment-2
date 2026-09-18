import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Abort the in-flight request whenever searchTerm changes so a slow
    // response for an older query can't overwrite the results of a newer one.
    const controller = new AbortController();
    const query = searchTerm.trim();

    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError("");

        const url =
          query === ""
            ? "https://api.tvmaze.com/shows"
            : `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(query ? "Failed to search movies" : "Failed to fetch movies");
        }

        const data = await response.json();

        setMovies(query ? data.map((item) => item.show) : data);
        setLoading(false);
      } catch (error) {
        if (error.name === "AbortError") {
          return; // superseded by a newer request; leave state to that one
        }

        setError(error.message);
        setLoading(false);
      }
    };

    fetchMovies();

    return () => controller.abort();
  }, [searchTerm]);

  return (
    <main className="min-h-screen bg-gray-100 px-4 sm:px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">
            Explore Movies
          </h1>

          <p className="text-gray-600">
            Search and discover your favorite movies and shows.
          </p>
        </div>

        <div className="mb-10">
          <input
            type="text"
            placeholder="🔍 Search for a movie..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900"
          />
        </div>

        {loading && (
          <p className="text-center text-lg text-gray-700">
            Loading movies...
          </p>
        )}

        {error && (
          <p className="text-center text-red-500">
            {error}
          </p>
        )}

        {!loading && !error && movies.length === 0 && (
          <p className="text-center text-gray-500">
            No movies found.
          </p>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onDetails={(selectedMovie) => {
                  setSelectedMovie(selectedMovie);
                }}
              />
            ))}
          </div>
        )}

        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      </div>
    </main>
  );
}

export default Movies;
