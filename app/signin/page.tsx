"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: true,
      email,
      password,
      callbackUrl: "/dashboard",
    });

    // Optionally handle errors (e.g. res.error)
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-[#0B121A] text-white font-sans px-6">
      <h1 className="text-3xl font-bold mb-4">Sign In</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 bg-[#121A24] border border-gray-600 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 bg-[#121A24] border border-gray-600 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
        >
          Sign In
        </button>
      </form>
      <p className="text-center text-sm mt-4">
        Don’t have an account?{" "}
        <a href="/signup" className="text-blue-400 underline">
          Sign up
        </a>
      </p>
    </main>
  );
}
