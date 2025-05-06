import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  variant?: "ghost" | "outline" | "solid"; // Extend as needed
  size?: "sm" | "md" | "lg";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "solid", size = "md", className, ...props }, ref) => {
    const baseStyles = "rounded font-medium transition focus:outline-none";
    const variantStyles = {
      ghost: "bg-transparent hover:bg-gray-100 text-black",
      outline: "border border-gray-300 text-black hover:bg-gray-100",
      solid: "bg-black text-white hover:bg-gray-800",
    };
    const sizeStyles = {
      sm: "px-2 py-1 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-5 py-3 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
