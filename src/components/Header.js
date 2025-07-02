// src/components/Header.js

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow flex items-center justify-between px-6 py-3">
      {/* Logo */}
      <div>
        <a href="/" className="text-2xl font-bold text-gray-800 tracking-wide">Shoppify</a>
      </div>

      {/* Search box (hidden on small screens) */}
      <div className="hidden md:block flex-1 mx-8">
        <input
          type="search"
          placeholder="Search products..."
          className="w-full border rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4">
        {/* Cart */}
        <button className="relative text-xl text-gray-800">
          <span className="material-icons">shopping_cart</span>
          <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full px-2 text-xs" id="cart-count">0</span>
        </button>
        {/* Wishlist */}
        <button className="relative text-xl text-gray-800">
          <span className="material-icons">favorite</span>
          <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full px-2 text-xs" id="wishlist-count">0</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
