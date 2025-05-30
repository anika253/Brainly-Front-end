import { forwardRef } from "react";

interface InputProps {
  placeholder: string;
  type?: any;

  ref?: any;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder }, ref) => {
    return (
      <div>
        <input
          ref={ref}
          placeholder={placeholder}
          type="text"
          className="px-4 py-2 border rounded w-full mb-4"
        />
      </div>
    );
  }
);

export default Input;
