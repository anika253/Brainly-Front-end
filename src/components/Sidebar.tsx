import { TwitterIcon } from "./icons/TwitterIcon";
import { SidebarItem } from "./SidebarItem";
import { YouTubeIcon } from "./icons/YouTubeIcon";
export function Sidebar() {
  return (
    <div
      className="h-screen bg-white border-r w-72
fixed
   left-0 top-0"
    >
      <div className="pt-4">
        <SidebarItem text="Twitter" icon={<TwitterIcon />} />
        <SidebarItem text="Twitter" icon={<YouTubeIcon />} />
      </div>
    </div>
  );
}
