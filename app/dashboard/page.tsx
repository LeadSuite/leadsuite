"use client";

import dynamic from "next/dynamic";

// 👇 Lazy-load the client-only dashboard component
const ClientDashboard = dynamic(() => import("./ClientDashboard"), {
  ssr: false,
});

export default function DashboardPage() {
  return <ClientDashboard />;
}
