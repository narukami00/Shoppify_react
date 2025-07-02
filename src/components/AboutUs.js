// src/components/AboutUs.js
import aboutusImage from '../assets/aboutus.svg';

function AboutUs() {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">About Us</h1>
          <h4 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-5">
            Shoppify is your go-to destination for the latest fashion trends and styles.{' '}
            <span className="text-orange-500 font-bold">Buy Now!</span>
          </h4>
          <p className="text-lg md:text-2xl text-gray-600">
            We offer a wide range of products including clothing, accessories, and more. Our mission is to provide high-quality products at affordable prices.
          </p>
        </div>
        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src={aboutusImage}
            alt="About Shoppify"
            className="w-80 sm:w-[28rem] md:w-[32rem] h-[20rem] md:h-[28rem] max-w-full object-contain rounded-xl transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
