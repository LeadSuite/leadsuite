"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LeadSuiteLanding() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="min-h-screen bg-[#0B121A] text-white font-sans">
      {/* Header with top-left logo */}
      <header className="w-full flex items-center px-6 py-4 fixed top-0 left-0 z-50 bg-transparent">
        <Image
          src="/logo.png"
          alt="LeadSuite Logo"
          width={240}
          height={100}
          className="w-auto h-[100px]"
        />
      </header>

      {/* Spacer to push content below fixed header */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center mb-20 px-6" data-aos="fade-up">
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Meet <span className="text-blue-400">LeadSuite</span>
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          AI-powered lead generation and smart chat automation — installed on your site in 48 hours.
        </p>
        <a
          href="/book-demo"
          className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg px-6 py-3 rounded-xl hover:from-blue-600 hover:to-blue-800 transition"
        >
          Book a Free Demo
        </a>
      </section>
    </main>
  );
}