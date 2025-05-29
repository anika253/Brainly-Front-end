// App.tsx
import { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { Card } from "./components/Card";
import { Button } from "./components/Button";
import { PlusIcon } from "./components/icons/PlusIcon";
import { ShareIcon } from "./components/icons/ShareIcon";
import { CreateContentModal } from "./components/CreateContentModal";

function App() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="First Tweet"
            type="twitter"
            link="https://twitter.com/kirat_tw/status/1633685473821425666"
          />
          <Card
            title="First YouTube Video"
            type="youtube"
            link="https://www.youtube.com/watch?v=9bZkp7q19f0"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
