// src/components/HeroSection.js
import heroImage from '../assets/hero.svg';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-orange-200 via-yellow-100 to-pink-100 flex flex-col md:flex-row items-center justify-between px-6 py-20 overflow-hidden">
      {/* Decorative background shapes */}
      <motion.div
        className="absolute -top-16 -left-16 w-72 h-72 bg-orange-400 opacity-20 rounded-full blur-3xl z-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400 opacity-20 rounded-full blur-3xl z-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      />
      {/* Text Content */}
      <motion.div
        className="max-w-xl mb-10 md:mb-0 z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-red-600 via-orange-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg tracking-tight">
          Summer Collection
        </h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-700 mb-8 font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Discover the latest trends in <span className="text-orange-500 font-bold">shorts</span> and <span className="text-pink-500 font-bold">pajamas</span>.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Link
            to="/summer"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-110 text-lg"
          >
            Shop Now
          </Link>
        </motion.div>
      </motion.div>
      {/* Hero Image */}
      <motion.div
        className="flex-shrink-0 z-10"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <img
          src={heroImage}
          alt="Summer Collection"
          className="w-80 md:w-[32rem] rounded-2xl transition-transform duration-300 hover:scale-105"
        />
      </motion.div>
    </section>
  );
}

export default HeroSection;
