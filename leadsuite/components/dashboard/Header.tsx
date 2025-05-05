import React from "react";
import { Bell, Search, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  // Determine the title based on the current path
  const getHeaderTitle = () => {
    switch (pathname) {
      case "/":
        return "Dashboard";
      case "/messages":
        return "Messages";
      case "/calendar":
        return "Calendar";
      case "/settings":
        return "Settings";
      default:
        return "Dashboard";
    }
  };

  return (
    <header className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-medium text-leadsuite-dark">{getHeaderTitle()}</h1>
      </div>

      <div className="flex-1 max-w-md mx-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-9 bg-gray-50 border-gray-200"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="text-leadsuite-muted">
          <Bell size={20} />
        </Button>

        <Button variant="ghost" className="flex gap-2 items-center text-leadsuite-text">
          <div className="h-8 w-8 rounded-full bg-leadsuite-lightBlue flex items-center justify-center">
            <User size={16} className="text-leadsuite-blue" />
          </div>
          <span>John Doe</span>
          <ChevronDown size={16} />
        </Button>
      </div>
    </header>
  );
}
