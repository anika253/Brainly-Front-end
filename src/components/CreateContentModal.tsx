import { useState } from "react";
import { CrossIcon } from "./icons/CrossIcon";
import { Button } from "./Button";

// controlled component
export function CreateContentModal({ open, onClose }) {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
          <div className="flex-col justify-center">
            <span className="bg-white opacity-100 p-4 rounded">
              <div className="flex justify-end">
                <CrossIcon />
              </div>
              <div>
                <Input placeholder={"Title"} />
                <Input placeholder={"Link"} />
              </div>
              <Button variant="primary" text="Submit" />
              {/* You can place the modal content here */}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

function Input({
  onChange,
  placeholder,
}: {
  onChange?: () => void;
  placeholder: string;
}) {
  return (
    <div>
      <input
        placeholder={placeholder}
        type="text"
        className="px-4 py-2 border rounded w-full"
        onChange={onChange}
      />
    </div>
  );
}
