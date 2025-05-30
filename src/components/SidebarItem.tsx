import type { ReactElement } from "react";

interface SidebarItemProps {
  text: string;
  icon: ReactElement;
}

export function SidebarItem({ text, icon }: SidebarItemProps) {
  return (
    <button
      className="group flex w-full items-center gap-3
                 rounded-md px-3 py-2 text-left
                 cursor pointer hover: bg-gray-200 pl-4
                 transition-all duration-150
                 max-w-48
                 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    >
      <span className="shrink-0">{icon}</span>
      <span className="truncate">{text}</span>
    </button>
  );
}
