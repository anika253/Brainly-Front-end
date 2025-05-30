import { Button } from "../components/Button";
import Input from "../components/Input";

export function SignIn() {
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white border min-w-[48] p-8 rounded-xl">
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <div className="flex justify-center">
          <Button
            loading={false}
            variant="primary"
            text="SignIn"
            fullWidth={true}
          />
        </div>
      </div>
    </div>
  );
}
