
import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Calendar, Users } from "lucide-react";

type ActivityItem = {
  id: number;
  title: string;
  description: string;
  time: string;
  icon: "message" | "calendar" | "contact";
};

const activities: ActivityItem[] = [
  {
    id: 1,
    title: "New message from Sarah",
    description: "Hey, do you have a minute to discuss the proposal?",
    time: "5 min ago",
    icon: "message",
  },
  {
    id: 2,
    title: "Meeting scheduled",
    description: "Sales presentation with ABC Corp at 2:00 PM",
    time: "1 hour ago",
    icon: "calendar",
  },
  {
    id: 3,
    title: "Contact updated",
    description: "John Smith's information was updated",
    time: "3 hours ago",
    icon: "contact",
  },
  {
    id: 4,
    title: "New message from Team",
    description: "The project requirements have been updated",
    time: "Yesterday",
    icon: "message",
  },
];

const getActivityIcon = (type: string) => {
  switch (type) {
    case "message":
      return (
        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
          <MessageSquare size={16} className="text-apollo-blue" />
        </div>
      );
    case "calendar":
      return (
        <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
          <Calendar size={16} className="text-purple-600" />
        </div>
      );
    case "contact":
      return (
        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
          <Users size={16} className="text-green-600" />
        </div>
      );
    default:
      return null;
  }
};

interface ActivityFeedProps {
  className?: string;
}

export function ActivityFeed({ className }: ActivityFeedProps) {
  return (
    <Card className={cn("apollo-card-shadow h-full", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-md font-medium">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-5">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-3">
            {getActivityIcon(activity.icon)}
            <div className="flex-1">
              <h4 className="text-sm font-medium text-apollo-dark">{activity.title}</h4>
              <p className="text-sm text-apollo-muted mt-0.5">{activity.description}</p>
              <span className="text-xs text-gray-400 mt-1 block">{activity.time}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
