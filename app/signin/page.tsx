"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      callbackUrl: "/dashboard",
    });

    if (res?.error) alert("Invalid credentials.");
  };

  return (
    <main className="min-h-screen bg-[#0B121A] text-white flex items-center justify-center px-6">
      <form onSubmit={handleSubmit} className="bg-[#121A24] p-8 rounded-xl space-y-4 w-full max-w-md">
        <h1 className="text-2xl font-bold">Sign In to LeadSuite</h1>
        <input
          className="w-full p-2 rounded bg-[#1C1F24] text-white"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full p-2 rounded bg-[#1C1F24] text-white"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="w-full bg-blue-500 hover:bg-blue-600 rounded py-2" type="submit">
          Sign In
        </button>
      </form>
    </main>
  );
}
