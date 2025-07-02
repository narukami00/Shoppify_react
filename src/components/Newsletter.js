// src/components/Newsletter.js

import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Simple submit handler (expand as needed)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      // Here you can add logic to send the email to your backend or service
    }
  };

  return (
    <section className="w-full bg-orange-50 py-16 px-4 md:px-0 flex justify-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Subscribe to our Newsletter
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8 text-center">
          Get the latest updates, exclusive offers, and style tips straight to your inbox.
        </p>
        {!submitted ? (
          <form
            className="w-full flex flex-col sm:flex-row gap-4"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg transition"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-transform duration-200 transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="text-green-600 text-lg font-semibold mt-4 transition-opacity duration-300">
            Thank you for subscribing!
          </div>
        )}
      </div>
    </section>
  );
}

export default Newsletter;
