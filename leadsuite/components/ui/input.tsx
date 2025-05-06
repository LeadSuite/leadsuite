import React from "react";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`px-3 py-2 border rounded-md ${className}`}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
