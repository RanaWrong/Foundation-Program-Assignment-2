function Home() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gray-900 text-white px-6">
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

        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300">
          Explore Movies
        </button>
      </div>
    </section>
  );
}

export default Home;