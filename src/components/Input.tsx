import React from "react";

function Input({
  onChange,
  placeholder,
}: {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
}) {
  return (
    <div>
      <input
        placeholder={placeholder}
        type="text"
        className="px-4 py-2 border rounded w-full my-2"
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
