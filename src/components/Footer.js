// src/components/Footer.js

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Brand and Description */}
        <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
          <span className="text-2xl font-extrabold text-orange-500 tracking-wide">Shoppify</span>
          <p className="mt-2 text-gray-400 text-sm max-w-xs">
            Your go-to destination for the latest fashion trends and styles. High-quality products, affordable prices, and a seamless shopping experience.
          </p>
        </div>
        {/* Navigation Links */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-2">
          <span className="font-semibold mb-2 text-gray-200">Quick Links</span>
          <a href="/" className="hover:text-orange-400 transition">Home</a>
          <a href="#bags" className="hover:text-orange-400 transition">Bags</a>
          <a href="#watches" className="hover:text-orange-400 transition">Watches</a>
          <a href="#about" className="hover:text-orange-400 transition">About Us</a>
          <a href="#newsletter" className="hover:text-orange-400 transition">Newsletter</a>
        </div>
        {/* Social Icons */}
        <div className="flex-1 flex flex-col items-center md:items-end gap-2">
          <span className="font-semibold mb-2 text-gray-200">Follow Us</span>
          <div className="flex gap-4">
            <a href="https://google.com" className="hover:text-orange-400 transition" aria-label="Twitter">
              {/* Twitter SVG */}
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 4.56c-.88.39-1.83.65-2.82.77a4.92 4.92 0 002.16-2.72 9.86 9.86 0 01-3.1 1.19 4.92 4.92 0 00-8.39 4.48A13.97 13.97 0 013 3.15a4.92 4.92 0 001.52 6.57 4.93 4.93 0 01-2.23-.61v.06a4.92 4.92 0 003.95 4.83 5.07 5.07 0 01-2.22.08 4.93 4.93 0 004.6 3.41A9.87 9.87 0 012 19.54a13.94 13.94 0 007.56 2.22c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63A10.1 10.1 0 0024 4.56z"/></svg>
            </a>
            <a href="https://google.com" className="hover:text-orange-400 transition" aria-label="Facebook">
              {/* Facebook SVG */}
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            </a>
            <a href="https://google.com" className="hover:text-orange-400 transition" aria-label="Instagram">
              {/* Instagram SVG */}
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.265.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.265.058-1.645.069-4.849.069s-3.584-.011-4.849-.069c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.646 2.163 15.266 2.163 12s.012-3.584.07-4.849c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.775.13 4.602.407 3.635 1.374c-.967.967-1.244 2.14-1.302 3.417C2.014 8.332 2 8.741 2 12c0 3.259.014 3.668.072 4.948.058 1.277.335 2.45 1.302 3.417.967.967 2.14 1.244 3.417 1.302C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.058 2.45-.335 3.417-1.302.967-.967 1.244-2.14 1.302-3.417.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.058-1.277-.335-2.45-1.302-3.417-.967-.967-2.14-1.244-3.417-1.302C15.668.014 15.259 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.324A4.162 4.162 0 1 1 12 7.838a4.162 4.162 0 0 1 0 8.324zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>
            </a>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Shoppify. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
