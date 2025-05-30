import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
}

// Global style mapping for variants
const variantClasses: Record<"primary" | "secondary", string> = {
  primary: "bg-purple-600 text-white ",
  secondary: "bg-purple-200 text-purple-600 ",
};
const defaultstyles = "px-4 py-2 rounded-md font-light flex items-center";
export function Button({
  variant,
  text,
  startIcon,
  onClick,
  fullWidth,
  loading,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${variantClasses[variant]} ${defaultstyles} ${
        fullWidth ? "w-full flex justify-center items-center" : ""
      } ${loading ? "opacity-45" : ""}`}
      disabled={loading}
    >
      <div className="pr-2 pl-2">{startIcon}</div>
      {text}
    </button>
  );
}
