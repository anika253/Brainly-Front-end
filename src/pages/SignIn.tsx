import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../Config";
import { useNavigate } from "react-router-dom";
export function Signin() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
      username,
      password,
    });
    const jwt = response.data.token; // final jwt out here
    localStorage.setItem("token", jwt);
    navigate("/dashboard");
  }

  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white border min-w-[300px] p-8 rounded-xl">
        <Input reference={usernameRef} placeholder="Username" />
        <Input reference={passwordRef} placeholder="Password" />
        <div className="flex justify-center mt-4">
          <Button
            onClick={signin}
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
