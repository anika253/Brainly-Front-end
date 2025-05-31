// App.tsx
import { useState, useEffect } from "react";
import { Sidebar } from "../components/Sidebar";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { PlusIcon } from "../components/icons/PlusIcon";
import { ShareIcon } from "../components/icons/ShareIcon";
import { CreateContentModal } from "../components/CreateContentModal";
import { useContent } from "../components/hooks/useContent";

function Dashboard() {
  /* ---------------- Twitter embed script (load once) ------------- */
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  /* ---------------- Modal state ---------------- */
  const [modalOpen, setModalOpen] = useState(false);
  const contents = useContent();

  /* ---------------- UI ---------------- */
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />

      {/* Sidebar width (18 rem) + 1 rem gap = 19 rem */}
      <main className="ml-[19rem] p-6">
        {/* ----- Modal ----- */}
        <CreateContentModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />

        {/* ----- Top action buttons ----- */}
        <div className="flex justify-end gap-4 mb-6">
          <Button
            onClick={() => setModalOpen(true)}
            variant="primary"
            text="Add Content"
            startIcon={<PlusIcon />}
          />
          <Button
            variant="secondary"
            text="Share Brain"
            startIcon={<ShareIcon />}
          />
        </div>

        {/* ----- Cards ----- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-gap-4">
          {contents.map(({ type, link, title }, index) => (
            <Card key={index} type={type} link={link} title={title} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
