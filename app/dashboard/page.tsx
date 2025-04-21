// app/dashboard/page.tsx
import dynamic from "next/dynamic";

// Load the actual dashboard as a client-only component
const ClientDashboard = dynamic(() => import("./ClientDashboard"), { ssr: false });

export default function DashboardPage() {
  return <ClientDashboard />;
}
