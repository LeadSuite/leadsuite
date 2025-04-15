"use client";

import { useState } from "react";

export default function BookDemo() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent redirect

    const form = e.currentTarget;
    const formData = new FormData(form);

    await fetch("https://hook.us2.make.com/ma4f0oqbuqm2oqulbp57ekkt1n6jn4wj", {
      method: "POST",
      body: formData,
    });

    setSubmitted(true); // show success message
  };

  return (
    <main className="min-h-screen bg-[#0B121A] text-white px-6 py-12 font-sans flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 text-center">Book a Free Demo</h1>
      <p className="text-white text-center mb-8 max-w-md">
        Fill out the form below and we’ll get back to you with a personalized demo and audit.
      </p>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-[#121A24] p-6 rounded-2xl shadow-md space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded-xl bg-white/10 text-white placeholder-gray-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded-xl bg-white/10 text-white placeholder-gray-300"
          />
          <input
            type="text"
            name="website"
            placeholder="Company Website (optional)"
            className="w-full px-4 py-2 rounded-xl bg-white/10 text-white placeholder-gray-300"
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
          <p className="text-gray-300">We’ve received your request. We'll reach out shortly.</p>
        </div>
      )}
    </main>
  );
}
