import { useRef } from "react";
import { Button } from "../components/Button";
import Input from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../Config";
export function Signup() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    await axios.post(BACKEND_URL + "/api/v1/signup", {
      data: {
        username,
        password,
      },
    });
    console.log("Username:", username);
    console.log("Password:", password);
  }

  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white border min-w-[300px] p-8 rounded-xl">
        <Input ref={usernameRef} placeholder="Username" />
        <Input ref={passwordRef} placeholder="Password" type="password" />
        <div className="flex justify-center mt-4">
          <Button
            onClick={signup}
            loading={false}
            variant="primary"
            text="SignUp"
            fullWidth={true}
          />
        </div>
      </div>
    </div>
  );
}
