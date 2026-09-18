function MovieCard({ movie, onDetails }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      <img
        src={movie.image?.medium}
        alt={movie.name}
        className="w-full h-72 sm:h-80 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-gray-900">
          {movie.name}
        </h2>

        <p className="text-gray-600 mb-2">
          ⭐ {movie.rating?.average || "N/A"}
        </p>

        <p className="text-gray-600 mb-4">
          📅 {movie.premiered || "Unknown"}
        </p>

        <button
          onClick={() => onDetails(movie)}
          className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700 transition"
        >
          See Details
        </button>
      </div>
    </div>
  );
}

export default MovieCard;