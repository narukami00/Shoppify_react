// src/components/HeroSection.js
import heroImage from '../assets/hero.svg';

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-orange-100 to-yellow-50 flex flex-col md:flex-row items-center justify-between px-6 py-16">
      {/* Text Content */}
      <div className="max-w-xl mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Summer Collection
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Discover the latest trends in bags and watches.
        </p>
        <a
          href="#products"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded shadow
             transition-transform duration-300 transform hover:scale-110"
>
          Shop Now
        </a>
      </div>
      {/* Hero Image */}
      <div className="flex-shrink-0">
        <img
          src={heroImage}
          alt="Summer Collection"
          className="w-72 md:w-96 rounded-lg transition-transform duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
}

export default HeroSection;
