"use client";

import { useState } from "react";

export default function BookDemo() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#0B121A] text-white px-6 py-12 font-sans flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 text-center">Book a Free Demo</h1>
      <p className="text-gray-400 text-center mb-8 max-w-md">
        Fill out the form below and we’ll get back to you with a personalized demo and audit.
      </p>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-[#121A24] p-6 rounded-2xl shadow-md space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded-xl text-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded-xl text-black"
          />
          <input
            type="text"
            placeholder="Company Website (optional)"
            className="w-full px-4 py-2 rounded-xl text-black"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl hover:from-blue-600 hover:to-blue-800 transition"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="text-center bg-green-600/20 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold text-green-400 mb-2">Thank you!</h2>
          <p className="text-gray-300">Your request has been received. We’ll be in touch soon.</p>
        </div>
      )}
    </main>
  );
}
