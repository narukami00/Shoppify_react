import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-lg flex items-center justify-between px-6 py-4 transition-all duration-300">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Link to="/" className="flex items-center gap-2 group">
          {/* Optional: Add a simple icon or SVG here for extra flair */}
          <span className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-orange-500 via-yellow-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg tracking-tight leading-[1.15] transition-transform duration-300 group-hover:scale-105 p-2">
            Shoppify
          </span>
        </Link>
      </motion.div>

      {/* Search box (hidden on small screens) */}
      <motion.div
        className="hidden md:block flex-1 mx-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        <input
          type="search"
          placeholder="Search products..."
          className="w-full border border-orange-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg shadow-sm transition"
        />
      </motion.div>

      {/* Icons */}
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
      >
        {/* Cart */}
        <button className="relative text-2xl text-gray-800 hover:text-orange-500 transition">
          <span className="material-icons">shopping_cart</span>
          <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full px-2 text-xs font-bold shadow">
            0
          </span>
        </button>
        {/* Wishlist */}
        <button className="relative text-2xl text-gray-800 hover:text-pink-500 transition">
          <span className="material-icons">favorite</span>
          <span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full px-2 text-xs font-bold shadow">
            0
          </span>
        </button>
      </motion.div>
    </header>
  );
}

export default Header;
