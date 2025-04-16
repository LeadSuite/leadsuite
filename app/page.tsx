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
      {/* Header with top-left logo  hogridger */}
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
          Revolutionizing the client acquisition process.
        </p>
        <a
          href="/book-demo"
          className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg px-6 py-3 rounded-xl hover:from-blue-600 hover:to-blue-800 transition"
        >
          Book a Free Demo
        </a>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
        <div className="bg-[#121A24] p-6 rounded-2xl shadow-md" data-aos="fade-up">
          <h3 className="text-2xl font-semibold mb-2 text-white">Lead Databases</h3>
          <p className="text-gray-400">Our advanced scraping methods of major databases provide you with ever-growing lead lists that are tailored to your firm.</p>
        </div>
        <div className="bg-[#121A24] p-6 rounded-2xl shadow-md" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-2xl font-semibold mb-2 text-white">Smart Chatbot Website Integration</h3>
          <p className="text-gray-400">Intelligent, 24/7 client assistants trained on your business.</p>
        </div>
        <div className="bg-[#121A24] p-6 rounded-2xl shadow-md" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-2xl font-semibold mb-2 text-white">48-Hour Setup</h3>
          <p className="text-gray-400">We install and train your bot in two days or less. Simple onboarding, zero fluff.</p>
        </div>
      </section>



      {/* Pricing */}
      <section className="bg-[#111820] py-20 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-[#121A24] p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">Starter</h3>
            <p className="text-3xl font-bold text-blue-400 mb-4">$15/mo</p>
            <ul className="text-gray-400 space-y-2 mb-6">
              <li>✓ Fully Custom AI Chatbot For Your Website; Any Language</li>
              <li>✓ Client Email + SMS Capture</li>
              <li>✓ 24/7 Assistant, Trained Around Your Business</li>
              <li>✓ Free Cancel Anytime</li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 transition px-6 py-2 rounded-xl text-white">Start Now</button>
          </div>
          <div className="bg-[#121A24] p-8 rounded-2xl border-2 border-blue-500">
            <h3 className="text-xl font-semibold mb-2">Client Lead Database Access</h3>
            <p className="text-3xl font-bold text-blue-400 mb-4">$300/mo</p>
            <ul className="text-gray-400 space-y-2 mb-6">
              <li>✓ Weekly Updated List of Thousands of Potential Clients With Vetted Interest in Your Service </li>
              <li>✓ Tailored For Your Industry And Region</li>
              <li>✓ Free Cancel Anytime</li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 transition px-6 py-2 rounded-xl text-white">Start Now</button>
          </div>
        </div>
      </section>
      <section className="bg-[#121A24] py-16 px-6" data-aos="fade-up">
  <div className="max-w-xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4 text-white">Contact Us</h2>
    <p className="text-gray-400 mb-6">
      
      (786) 838-3470
    </p>
    <a
      href="mailto:leadsuiteservice@gmail.com"
      className="text-blue-400 underline hover:text-blue-500 transition text-lg"
    >
      leadsuiteservice@gmail.com
    </a>
  </div>
</section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-16">
        © 2025 LeadSuite. Built for you. Powered by results.
      </footer>
    </main>
  );
}
