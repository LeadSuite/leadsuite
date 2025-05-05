
import React from "react";
import { Grid2x2, MessageSquare, Calendar, Users } from "lucide-react";
import { MetricCard } from "./MetricCard";

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
      <MetricCard
        title="Total Contacts"
        value="1,234"
        change={{ value: 12, positive: true }}
        subtitle="vs last week"
        icon={
          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
            <Users size={18} className="text-apollo-blue" />
          </div>
        }
      />
      <MetricCard
        title="Active Sequences"
        value="26"
        change={{ value: 5, positive: true }}
        subtitle="vs last week"
        icon={
          <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
            <Grid2x2 size={18} className="text-purple-600" />
          </div>
        }
      />
      <MetricCard
        title="Messages Sent"
        value="543"
        change={{ value: 8, positive: false }}
        subtitle="vs last week"
        icon={
          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
            <MessageSquare size={18} className="text-green-600" />
          </div>
        }
      />
      <MetricCard
        title="Meetings Booked"
        value="48"
        change={{ value: 24, positive: true }}
        subtitle="vs last week"
        icon={
          <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
            <Calendar size={18} className="text-amber-600" />
          </div>
        }
      />
    </div>
  );
}
