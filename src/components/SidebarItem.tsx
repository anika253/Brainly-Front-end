import type { ReactElement } from "react";

interface SidebarItemProps {
  text: string;
  icon: ReactElement;
}

export function SidebarItem({ text, icon }: SidebarItemProps) {
  return (
    <div className="flex items-center space-x-2">
      {icon}
      {text}
    </div>
  );
}
