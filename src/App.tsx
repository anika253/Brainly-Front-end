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
      <Card
        type="twitter"
        link="https://twitter.com/kirat_tw/status/1633685473821425666"
      />
    </div>
  );
}

export default App;
