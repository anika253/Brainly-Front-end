import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: String;
  startIcon: ReactElement;
}
export function Button(props: ButtonProps) {}
