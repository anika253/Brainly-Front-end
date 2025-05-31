import { CrossIcon } from "./icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";

interface CreateContentModalProps {
  open: boolean;
  onClose: () => void;
}

export function CreateContentModal({ open, onClose }: CreateContentModalProps) {
  if (!open) return null;

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
          <Input placeholder="Title" />
          <Input placeholder="Link" />

          {/* Submit Button */}
          <div className="flex justify-center mt-4">
            <Button variant="primary" text="Submit" />
          </div>
        </div>
      </div>
    </>
  );
}
