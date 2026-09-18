import { useEffect } from "react";
import { posterUrl } from "../utils/poster";

function MovieModal({ movie, onClose }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  if (!movie) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative">
          <img
            src={posterUrl(movie, "original")}
            alt={movie.name}
            className="w-full h-72 object-cover"
          />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-800 transition"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <div className="p-6 text-gray-900">
          <h2 className="text-3xl font-bold mb-3">
            {movie.name}
          </h2>

          <p className="mb-2 text-gray-700">
            ⭐ Rating: {movie.rating?.average || "N/A"}
          </p>

          <p className="mb-4 text-gray-700">
            📅 Release: {movie.premiered || "Unknown"}
          </p>

          <div className="mb-4">
            <h3 className="font-bold mb-2">Genres</h3>

            <div className="flex gap-2 flex-wrap">
              {movie.genres?.map((genre) => (
                <span
                  key={genre}
                  className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-2">Summary</h3>

            <div
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: movie.summary || "No summary available.",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;