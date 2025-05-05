import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Users,
  MessageSquare,
  Calendar,
  Settings,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarItemProps = {
  icon: React.ElementType;
  label: string;
  to: string;
  expanded: boolean;
};

const SidebarItem = ({ icon: Icon, label, to, expanded }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === to;

  return (
    <Link href={to} passHref>
      <div>
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start mb-1 gap-3 font-normal",
            expanded ? "px-3" : "px-3 justify-center",
            isActive
              ? "bg-sidebar-accent text-sidebar-accent-foreground"
              : "hover:bg-sidebar-accent/70 text-sidebar-foreground/80 hover:text-sidebar-foreground"
          )}
        >
          <Icon size={20} />
          {expanded && <span>{label}</span>}
        </Button>
      </div>
    </Link>
  );
};

export function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  return (
    <div
      className={cn(
        "h-screen flex flex-col border-r border-sidebar-border bg-sidebar transition-all duration-300",
        expanded ? "w-56" : "w-16"
      )}
    >
      <div className="flex items-center px-3 h-16 justify-between border-b border-sidebar-border">
        {expanded ? (
          <div className="flex items-center">
            <img
              src="/lovable-uploads/fcb3edeb-61c7-4b98-a3aa-7f645e62e1f0.png"
              alt="LeadSuite Logo"
              className="h-12"
            />
          </div>
        ) : (
          <div className="mx-auto">
            <img
              src="/lovable-uploads/fcb3edeb-61c7-4b98-a3aa-7f645e62e1f0.png"
              alt="LeadSuite Logo"
              className="h-12 w-12 object-contain"
            />
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          className="text-sidebar-foreground/70 hover:text-sidebar-foreground"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </Button>
      </div>
      <div className="flex-1 py-4 px-2 overflow-y-auto scrollbar-hide">
        <div className={cn("flex flex-col gap-1", expanded && "px-2")}>
          <SidebarItem icon={Users} label="Dashboard" to="/" expanded={expanded} />
          <SidebarItem icon={MessageSquare} label="Messages" to="/messages" expanded={expanded} />
          <SidebarItem icon={Calendar} label="Calendar" to="/calendar" expanded={expanded} />
        </div>
      </div>
      <div className="p-3 border-t border-sidebar-border">
        <SidebarItem icon={Settings} label="Settings" to="/settings" expanded={expanded} />
      </div>
    </div>
  );
}
