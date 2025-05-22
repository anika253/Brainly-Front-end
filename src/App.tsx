import "./App.css";
import { Button } from "./components/Button";
import { PlusIcon } from "./components/icons/PlusIcon";

function App() {
  return (
    <div>
      <Button
        startIcon={<PlusIcon />}
        size="sm"
        variant="primary"
        text="Share"
      />
      <Button size="md" variant="secondary" text="Add Content" />
      <Button size="lg" variant="secondary" text="Content" />
    </div>
  );
}
export default App;
