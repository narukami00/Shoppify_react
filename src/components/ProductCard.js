function ProductCard({ name, image, price }) {
  return (
    <div
      className="
        bg-white rounded-lg shadow hover:shadow-lg
        transition-transform duration-300 transform hover:scale-105
        p-4 flex flex-col items-center group
      "
    >
      <img src={image} alt={name} className="h-36 w-36 object-contain mb-3 rounded" />
      <h4 className="font-semibold text-lg mb-2 text-center">{name}</h4>
      <span className="font-bold text-orange-600 text-lg mb-4">${price}</span>
      <button
        className="
          bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded
          transform hover:scale-105
          opacity-0 group-hover:opacity-100
          transition-all duration-300
          pointer-events-none group-hover:pointer-events-auto
        "
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
