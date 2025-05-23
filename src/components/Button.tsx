import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
}

// Global style mapping for variants
const variantClasses: Record<"primary" | "secondary", string> = {
  primary: "bg-purple-600 text-white px-4 py-2 rounded",
  secondary: "bg-purple-200 text-purple-600 px-4 py-2 rounded",
};

export function Button({ variant, text, startIcon }: ButtonProps) {
  return (
    <button className={variantClasses[variant]}>
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {text}
    </button>
  );
}
