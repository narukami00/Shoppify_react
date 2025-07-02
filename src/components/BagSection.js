import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { motion } from 'framer-motion';

function BagsSection() {
  const [products, setProducts] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [productsPerRow, setProductsPerRow] = useState(1);

  // Fetch products (same as before)
  useEffect(() => {
    fetch("/products.json")
      .then(res => res.json())
      .then(data => setProducts(data.filter(p => p.category === "bags")));
  }, []);

  // Update productsPerRow based on window width and Tailwind breakpoints
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) setProductsPerRow(4); // lg
      else if (window.innerWidth >= 768) setProductsPerRow(3); // md
      else if (window.innerWidth >= 640) setProductsPerRow(2); // sm
      else setProductsPerRow(1); // xs
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate how many products to show (2 rows)
  const initialCount = productsPerRow * 2;
  const showingProducts = expanded ? products : products.slice(0, initialCount);

  return (
    <motion.section
      id="bags"
      className="my-12 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Bags Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {showingProducts.map(bag => (
          <ProductCard
            key={bag.id}
            name={bag.name}
            image={bag.image}
            price={bag.price}
          />
        ))}
      </div>
      {products.length > initialCount && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setExpanded(e => !e)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded shadow transition-transform duration-200 transform hover:scale-105"
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </motion.section>
  );
}

export default BagsSection;
