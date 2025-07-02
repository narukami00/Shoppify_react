// src/components/SummerProductCard.js

function SummerProductCard({ name, image, price, discount }) {
  // Calculate discounted price if discount exists
  const hasDiscount = discount && discount > 0;
  const discountedPrice = hasDiscount
    ? (price - (price * discount) / 100).toFixed(2)
    : price;

  return (
    <div className="relative bg-white rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition-all duration-300 p-4 flex flex-col items-center group">
      {/* Discount Badge */}
      {hasDiscount && (
        <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          -{discount}%
        </span>
      )}
      <img
        src={image}
        alt={name}
        className="h-36 w-36 object-contain mb-3 rounded"
      />
      <h4 className="font-semibold text-lg mb-2 text-center">{name}</h4>
      {/* Price Section */}
      {hasDiscount ? (
        <div className="flex flex-col items-center mb-4">
          <span className="text-gray-400 line-through text-base">
            ${price}
          </span>
          <span className="font-bold text-orange-600 text-lg">
            ${discountedPrice}
          </span>
        </div>
      ) : (
        <span className="font-bold text-orange-600 text-lg mb-4">
          ${price}
        </span>
      )}
      {/* Add to Cart Button (optional, hidden by default, appears on hover) */}
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

export default SummerProductCard;
