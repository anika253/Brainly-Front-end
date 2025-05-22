import "./App.css";
import { Button } from "./components/Button";
import { PlusIcon } from "./components/icons/PlusIcon";
import { ShareIcon } from "./components/icons/Share";

function App() {
  return (
    <div>
      <Button
        startIcon={<PlusIcon size={"lg"} />}
        size="lg"
        variant={"primary"}
        text="Share"
        endIcon={<ShareIcon size={"lg"} />}
      />
      <Button
        startIcon={<PlusIcon size={"lg"} />}
        size="lg"
        variant={"secondary"}
        text="Share"
        endIcon={<ShareIcon size={"lg"} />}
      />
      <Button
        startIcon={<PlusIcon size={"lg"} />}
        size="sm"
        variant={"primary"}
        text="Share"
        endIcon={<ShareIcon size={"lg"} />}
      />
    </div>
  );
}
export default App;
/* start elemnt aur end element ka type is a react element <here></here>*/
