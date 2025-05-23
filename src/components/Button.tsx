import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
}

// Global style mapping for variants
const variantClasses: Record<"primary" | "secondary", string> = {
  primary: "bg-purple-600 text-white ",
  secondary: "bg-purple-200 text-purple-600 ",
};
const defaultstyles = "px-4 py-2 rounded md rounded-md font-light";
export function Button({ variant, text, startIcon }: ButtonProps) {
  return (
    <button className={variantClasses[variant] + "" + defaultstyles}>
      {text}
    </button>
  );
}
