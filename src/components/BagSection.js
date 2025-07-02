import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { motion } from 'framer-motion';

function BagsSection() {
  const [products, setProducts] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [productsPerRow, setProductsPerRow] = useState(1);

  useEffect(() => {
    fetch("/products.json")
      .then(res => res.json())
      .then(data => setProducts(data.filter(p => p.category === "bags")));
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) setProductsPerRow(4);
      else if (window.innerWidth >= 768) setProductsPerRow(3);
      else if (window.innerWidth >= 640) setProductsPerRow(2);
      else setProductsPerRow(1);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const initialCount = productsPerRow * 2;
  const showingProducts = expanded ? products : products.slice(0, initialCount);

  return (
    <motion.section
      id="bags"
      className="relative my-16 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Decorative Shape */}
      <div className="absolute left-0 top-20 w-80 h-80 bg-orange-300 opacity-20 rounded-full blur-3xl z-0 pointer-events-none" />
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-10 text-center bg-gradient-to-r from-orange-500 via-yellow-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg tracking-tight relative z-10 p-2"
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Bags Collection
      </motion.h2>
      {/* Product Grid */}
      <div className="relative z-10 bg-white/80 rounded-2xl shadow-xl p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {showingProducts.map(bag => (
          <ProductCard
            key={bag.id}
            name={bag.name}
            image={bag.image}
            price={bag.price}
          />
        ))}
      </div>
      {/* Show More Button */}
      {products.length > initialCount && (
        <div className="flex justify-center mt-8 relative z-10">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition-all duration-300 text-lg"
            onClick={() => setExpanded(e => !e)}
          >
            {expanded ? "Show Less" : "Show More"}
          </motion.button>
        </div>
      )}
    </motion.section>
  );
}

export default BagsSection;
