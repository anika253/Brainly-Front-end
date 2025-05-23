import "./App.css";
import { Button } from "./components/Button";
import { PlusIcon } from "./components/icons/PlusIcon";
import { ShareIcon } from "./components/icons/ShareIcon";
import { Card } from "./components/Card";

function App() {
  return (
    <div>
      <Button
        variant="primary"
        text="Add Content"
        startIcon={<PlusIcon />}
      ></Button>
      <Button
        variant="secondary"
        text="Share Brain"
        startIcon={<ShareIcon />}
      ></Button>
      <Card />
    </div>
  );
}

export default App;
