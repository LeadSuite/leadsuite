"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (!res.ok) {
      setError(data.message || "Failed to register");
    } else {
      router.push("/signin");
    }
  };

  return (
    <main className="min-h-screen bg-[#0B121A] text-white px-6 py-12 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center">Create Your Account</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-2 rounded bg-[#1A1A1A] border border-gray-700"
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-2 rounded bg-[#1A1A1A] border border-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full p-2 rounded bg-[#1A1A1A] border border-gray-700"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded">
          Sign Up
        </button>
      </form>
    </main>
  );
}
