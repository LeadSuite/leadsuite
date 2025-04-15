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
        width={100}
        height={100}
        className="w-auto h-100"
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
      <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg px-6 py-3 rounded-xl hover:from-blue-600 hover:to-blue-800 transition">
        Book a Free Demo
      <a
  href="/book-demo"
  className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg px-6 py-3 rounded-xl hover:from-blue-600 hover:to-blue-800 transition"
>
  Book a Free Demo
</a>
    </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
        <div className="bg-[#121A24] p-6 rounded-2xl shadow-md" data-aos="fade-up">
          <h3 className="text-2xl font-semibold mb-2 text-white">Smart Chatbots</h3>
          <p className="text-gray-400">Capture leads with intelligent, 24/7 website assistants trained on your business.</p>
        </div>
        <div className="bg-[#121A24] p-6 rounded-2xl shadow-md" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-2xl font-semibold mb-2 text-white">Instant Integrations</h3>
          <p className="text-gray-400">Sync with your CRM, email tools, or Slack instantly — no dev needed.</p>
        </div>
        <div className="bg-[#121A24] p-6 rounded-2xl shadow-md" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-2xl font-semibold mb-2 text-white">48-Hour Setup</h3>
          <p className="text-gray-400">We install and train your bot in two days or less. Simple onboarding, zero fluff.</p>
        </div>
      </section>

      <section className="bg-[#111820] py-16" data-aos="zoom-in">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Request a Free Demo</h2>
          <p className="text-gray-400 mb-6">Drop your email below and we’ll reach out with a custom audit and example chatbot live on your site.</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <input
              type="email"
              placeholder="Your business email"
              className="px-4 py-2 text-black rounded-xl w-full max-w-xs"
            />
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl hover:from-blue-600 hover:to-blue-800 transition">
              Submit
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto my-24 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#121A24] p-6 rounded-2xl shadow-md">
            <p className="text-gray-300 italic">"LeadSuite doubled our conversion rate in less than a week. Absolutely worth every penny."</p>
            <p className="mt-4 font-semibold text-blue-400">— Maya, Ecomm Store Owner</p>
          </div>
          <div className="bg-[#121A24] p-6 rounded-2xl shadow-md">
            <p className="text-gray-300 italic">"Setup was fast and seamless. Now we never miss a lead even after hours."</p>
            <p className="mt-4 font-semibold text-blue-400">— Jordan, SaaS Founder</p>
          </div>
          <div className="bg-[#121A24] p-6 rounded-2xl shadow-md">
            <p className="text-gray-300 italic">"The chatbot is smarter than some of our reps — and doesn’t take lunch breaks!"</p>
            <p className="mt-4 font-semibold text-blue-400">— Chris, Agency CEO</p>
          </div>
        </div>
      </section>

      <section className="bg-[#111820] py-20 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-8">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-[#121A24] p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">Starter</h3>
            <p className="text-3xl font-bold text-blue-400 mb-4">$500 + $99/mo</p>
            <ul className="text-gray-400 space-y-2 mb-6">
              <li>✓ AI Chatbot</li>
              <li>✓ Email Capture</li>
              <li>✓ Basic Reporting</li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 transition px-6 py-2 rounded-xl text-white">Start Now</button>
          </div>
          <div className="bg-[#121A24] p-8 rounded-2xl border-2 border-blue-500">
            <h3 className="text-xl font-semibold mb-2">Growth</h3>
            <p className="text-3xl font-bold text-blue-400 mb-4">$1,500 + $199/mo</p>
            <ul className="text-gray-400 space-y-2 mb-6">
              <li>✓ Smart Chatbot</li>
              <li>✓ SMS + Email Flows</li>
              <li>✓ CRM Integration</li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 transition px-6 py-2 rounded-xl text-white">Get Started</button>
          </div>
          <div className="bg-[#121A24] p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <p className="text-3xl font-bold text-blue-400 mb-4">$3,000 + $399/mo</p>
            <ul className="text-gray-400 space-y-2 mb-6">
              <li>✓ Fully Custom AI</li>
              <li>✓ Live Chat Handoff</li>
              <li>✓ All Integrations</li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 transition px-6 py-2 rounded-xl text-white">Go Pro</button>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-16">
        © 2025 LeadSuite. Built with AI. Powered by results.
      </footer>
    </main>
  );
}
