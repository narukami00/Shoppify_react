import { useEffect, useState } from "react";
import SummerProductCard from "./SummerProductCard";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 

function SummerCollectionPage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch("/products.json")
      .then(res => res.json())
      .then(data => setProducts(data.filter(p => p.category === "clothing")));
  }, []);

  return (
    <motion.section
      className="w-full min-h-screen py-12 px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mb-8 flex">
        <button
          onClick={() => navigate("/")}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded shadow transition-transform duration-200 transform hover:scale-105"
        >
          ← Back to Home
        </button>
      </div>

      <motion.h2
        className="
            text-5xl md:text-7xl font-extrabold mb-10 text-center
            bg-gradient-to-r from-orange-500 via-yellow-400 to-pink-500
            bg-clip-text text-transparent
            drop-shadow-lg
            tracking-tight
        "
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        >
        Summer Collection
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <SummerProductCard key={product.id} {...product} />
        ))}
      </div>
    </motion.section>
  );
}

export default SummerCollectionPage;
