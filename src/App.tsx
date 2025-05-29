import "./App.css";
import React, { useState } from "react";
import { Button } from "./components/Button";
import { PlusIcon } from "./components/icons/PlusIcon";
import { ShareIcon } from "./components/icons/ShareIcon";
import { Card } from "./components/Card";
import { CreateContentModal } from "./components/CreateContentModal";
import { Sidebar } from "./components/Sidebar";
const [modalOpen, setModalOpen] = useState(false);

function App() {
  return (
    <div>
      <Sidebar />

      <div
        className="p-4 ml-72
          min-h-screen
        bg-gray-100
        border-2

      "
      >
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
        {/* Top Buttons */}
        <div className="flex justify-end gap-4">
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

        {/* Cards Section */}
        <div className="flex flex-wrap gap-4">
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
      </div>
    </div>
  );
}

export default App;
