"use client";

import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

interface Lead {
  name?: string;
  username?: string;
  city?: string;
  email?: string;
  phone?: string;
  link: string;
  platform: string;
  funnel_stage: string;
  timestamp: string;
  post_content: string;
  userEmail?: string;
}

export default function ClientDashboard() {
  const sessionData = useSession();
  const session = sessionData?.data;
  const status = sessionData?.status;

  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const res = await fetch("/api/leads");
        const data = await res.json();

        if (session?.user?.email) {
          const userLeads = data.filter((lead: Lead) => lead.userEmail === session?.user?.email);
          setLeads(userLeads);
        }
      } catch (err) {
        console.error("Failed to fetch leads", err);
      } finally {
        setLoading(false);
      }
    };

    if (session?.user?.email) {
      fetchLeads();
    }
  }, [session]);

  if (status === "loading") return <p className="text-center text-white">🔄 Loading session...</p>;

  return (
    <main className="min-h-screen bg-[#0B121A] text-white px-6 py-12 font-sans relative">
      <div className="absolute top-6 right-6">
        {session ? (
          <button onClick={() => signOut()} className="text-sm text-red-400 hover:underline">
            Sign out
          </button>
        ) : (
          <button onClick={() => signIn("github")} className="text-sm text-blue-400 hover:underline">
            Sign in with GitHub
          </button>
        )}
      </div>

      {!session ? (
        <p className="text-center text-red-500 mt-16">
          ❌ Please sign in to view your dashboard.
        </p>
      ) : (
        <>
          <h1 className="text-4xl font-bold mb-6 text-center">📊 Your LeadStream Dashboard</h1>
          <p className="text-gray-400 text-center mb-10">Live, enriched lead stream tailored to you</p>

          {loading ? (
            <p className="text-center text-gray-500">Loading leads...</p>
          ) : leads.length === 0 ? (
            <p className="text-center text-gray-400">No leads available for your account yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leads.map((lead, i) => (
                <div key={i} className="bg-[#121A24] p-6 rounded-xl shadow-lg space-y-2">
                  <h2 className="text-xl font-semibold text-blue-400">{lead.name || "Unknown Name"}</h2>
                  <p className="text-sm text-gray-300"><strong>Username:</strong> {lead.username || "N/A"}</p>
                  <p className="text-sm text-gray-300"><strong>City:</strong> {lead.city || "N/A"}</p>
                  <p className="text-sm text-gray-300"><strong>Email:</strong> {lead.email || "N/A"}</p>
                  <p className="text-sm text-gray-300"><strong>Phone:</strong> {lead.phone || "N/A"}</p>
                  <p className="text-sm text-gray-300"><strong>Funnel Stage:</strong> {lead.funnel_stage}</p>
                  <p className="text-sm text-gray-300"><strong>Platform:</strong> {lead.platform}</p>
                  <p className="text-sm text-gray-300"><strong>Posted:</strong> {new Date(lead.timestamp).toLocaleString()}</p>
                  <a href={lead.link} target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-400 hover:underline">
                    View Original Post
                  </a>
                  <p className="text-sm text-gray-400 mt-2 italic">“{lead.post_content.slice(0, 150)}...”</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </main>
  );
}
