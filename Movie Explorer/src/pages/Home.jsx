import { Link } from "react-router-dom";

function Home() {
  return (
    <section
      className="min-h-[80vh] flex items-center justify-center bg-gray-900 bg-cover bg-center text-white px-6"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="text-center max-w-3xl">
        <p className="text-yellow-400 font-semibold mb-4">
          MOVIE EXPLORER
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Discover Your Next Favorite Movie
        </h1>

        <p className="text-gray-300 text-lg mb-8">
          Explore movies and shows from around the world.
          Search for your favorite titles and discover something new.
        </p>

        <Link
          to="/movies"
          className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          Explore Movies
        </Link>
      </div>
    </section>
  );
}

export default Home;