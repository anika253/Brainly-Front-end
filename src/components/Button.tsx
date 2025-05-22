import type { ReactElement } from "react";

type Variant = "primary" | "secondary";
type Size = "sm" | "md" | "lg";

export interface ButtonInterface {
  variant: Variant;
  size: Size;
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
}

const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-600",
};

const sizeStyles = {
  sm: "py-1 px-2 text-sm rounded-sm",
  md: "px-4 py-4 text-md rounded-md",
  lg: "px-8 py-4 text-xl rounded-xl",
};

const defaultStyles = "rounded-md flex items-center";

export function Button(props: ButtonInterface) {
  return (
    <button
      onClick={props.onClick}
      className={`${defaultStyles} ${sizeStyles[props.size]} ${
        variantStyles[props.variant]
      } `}
    >
      {props.startIcon && <span className="mr-2">{props.startIcon}</span>}
      <span>{props.text}</span>
      {props.endIcon && <span className="ml-2">{props.endIcon}</span>}
    </button>
  );
}
