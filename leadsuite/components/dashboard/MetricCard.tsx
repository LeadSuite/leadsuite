
import React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";

type MetricCardProps = {
  title: string;
  value: string | number;
  change?: {
    value: number;
    positive: boolean;
  };
  subtitle?: string;
  className?: string;
  icon?: React.ReactNode;
};

export function MetricCard({
  title,
  value,
  change,
  subtitle,
  className,
  icon,
}: MetricCardProps) {
  return (
    <Card className={cn("apollo-card-shadow p-5", className)}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-apollo-muted">{title}</p>
          <h3 className="text-2xl font-semibold mt-1 text-apollo-dark">{value}</h3>
          
          {change && (
            <div className="flex items-center mt-2 text-sm">
              {change.positive ? (
                <ArrowUp 
                  size={14} 
                  className="text-green-500 mr-1" 
                />
              ) : (
                <ArrowDown 
                  size={14} 
                  className="text-red-500 mr-1" 
                />
              )}
              <span 
                className={cn(
                  "font-medium",
                  change.positive ? "text-green-500" : "text-red-500"
                )}
              >
                {change.value}%
              </span>
              {subtitle && (
                <span className="text-apollo-muted ml-1">{subtitle}</span>
              )}
            </div>
          )}
          
          {!change && subtitle && (
            <p className="text-sm mt-1 text-apollo-muted">{subtitle}</p>
          )}
        </div>
        
        {icon && <div>{icon}</div>}
      </div>
    </Card>
  );
}
