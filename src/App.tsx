import "./App.css";
import { Button } from "./components/Button";
import { PlusIcon } from "./components/icons/PlusIcon";
import { ShareIcon } from "./components/icons/ShareIcon";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="p-4 space-y-6">
      {/* Top Buttons */}
      <div className="flex justify-end gap-4">
        <Button variant="primary" text="Add Content" startIcon={<PlusIcon />} />
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
  );
}

export default App;
