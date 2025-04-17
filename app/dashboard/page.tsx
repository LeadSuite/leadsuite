"use client";

import { useEffect, useState } from "react";

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
}

export default function LeadDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const res = await fetch("/api/leads");
        const data = await res.json();
        setLeads(data);
      } catch (err) {
        console.error("Failed to fetch leads", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  return (
    <main className="min-h-screen bg-[#0B121A] text-white px-6 py-12 font-sans">
      <h1 className="text-4xl font-bold mb-6 text-center">📊 LeadSuite Dashboard</h1>
      <p className="text-gray-400 text-center mb-10">Live, enriched lead stream powered by Reddit + AI</p>

      {loading ? (
        <p className="text-center text-gray-500">Loading leads...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leads.map((lead, i) => (
            <div key={i} className="bg-[#121A24] p-6 rounded-xl shadow-lg space-y-2">
              <h2 className="text-xl font-semibold text-blue-400">{lead.name || "Unknown Name"}</h2>
              <p className="text-sm text-gray-300">
                <strong>Username:</strong> {lead.username || "N/A"}
              </p>
              <p className="text-sm text-gray-300">
                <strong>City:</strong> {lead.city || "N/A"}
              </p>
              <p className="text-sm text-gray-300">
                <strong>Email:</strong> {lead.email || "N/A"}
              </p>
              <p className="text-sm text-gray-300">
                <strong>Phone:</strong> {lead.phone || "N/A"}
              </p>
              <p className="text-sm text-gray-300">
                <strong>Funnel Stage:</strong> {lead.funnel_stage}
              </p>
              <p className="text-sm text-gray-300">
                <strong>Platform:</strong> {lead.platform}
              </p>
              <p className="text-sm text-gray-300">
                <strong>Posted:</strong>{" "}
                {new Date(lead.timestamp).toLocaleString()}
              </p>
              <a
                href={lead.link}
                target="_blank"
                className="block text-sm text-blue-400 hover:underline"
                rel="noopener noreferrer"
              >
                View Original Post
              </a>
              <p className="text-sm text-gray-400 mt-2 italic">
                “{lead.post_content.slice(0, 150)}...”
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
