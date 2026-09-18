import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-950 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          🎬 Movie Explorer
        </h1>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-yellow-400">
            Home
          </Link>

          <Link to="/movies" className="hover:text-yellow-400">
            Movies
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
