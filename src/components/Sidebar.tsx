import { SidebarItem } from "./SidebarItem";
import { TwitterIcon } from "./icons/TwitterIcon";
import { YouTubeIcon } from "./icons/YouTubeIcon";
// components/Sidebar.tsx
export function Sidebar() {
  /* w-72  = 18 rem  (288 px) */
  return (
    <aside className="fixed inset-y-0 left-0 w-72 bg-white border-r px-4 py-6">
      <h1 className="text-xl font-bold mb-6">Brainly</h1>

      <nav className="space-y-3">
        {/* your SidebarItem components */}
        <SidebarItem text="Twitter" icon={<TwitterIcon />} />
        <SidebarItem text="YouTube" icon={<YouTubeIcon />} />
      </nav>
    </aside>
  );
}
