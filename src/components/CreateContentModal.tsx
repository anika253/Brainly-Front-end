import { CrossIcon } from "./icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { useRef, useState } from "react";
import { BACKEND_URL } from "../Config";
import axios from "axios";

const ContentType = {
  YouTube: "youtube",
  Twitter: "twitter",
} as const;

type ContentType = (typeof ContentType)[keyof typeof ContentType];

interface CreateContentModalProps {
  open: boolean;
  onClose: () => void;
}

export function CreateContentModal({ open, onClose }: CreateContentModalProps) {
  if (!open) return null;

  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState<ContentType>(ContentType.YouTube);

  async function AddContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    if (!title || !link) return;

    try {
      await axios.post(
        `${BACKEND_URL}/api/v1/content`,
        {
          link,
          type,
          title,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token") || "",
          },
        }
      );
      onClose(); // Optional: close modal after submission
    } catch (error) {
      console.error("Error adding content:", error);
    }
  }

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-slate-500 bg-opacity-60 z-40"></div>

      {/* Modal content */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
          {/* Close Button */}
          <div className="flex justify-end">
            <div
              onClick={onClose}
              className="cursor-pointer hover:bg-gray-200 rounded-full p-1 transition-all duration-200 ease-in-out"
            >
              <CrossIcon />
            </div>
          </div>

          {/* Input fields */}
          <Input reference={titleRef} placeholder="Title" />
          <Input reference={linkRef} placeholder="Link" />

          {/* Type selector */}
          <h1 className="mt-4 font-semibold">TYPE</h1>
          <div className="flex gap-2 p-4">
            <Button
              text="Youtube"
              variant={type === ContentType.YouTube ? "primary" : "secondary"}
              onClick={() => setType(ContentType.YouTube)}
            />
            <Button
              text="Twitter"
              variant={type === ContentType.Twitter ? "primary" : "secondary"}
              onClick={() => setType(ContentType.Twitter)}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-4">
            <Button onClick={AddContent} variant="primary" text="Submit" />
          </div>
        </div>
      </div>
    </>
  );
}
