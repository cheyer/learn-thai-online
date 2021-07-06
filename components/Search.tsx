import React from "react";

interface Props {
  onChange: (value: string) => void;
  placeholder: string;
  type: "search" | "text";
  value: string;
}

const Search: React.FC<Props> = ({ placeholder, value, type, onChange }) => {
  return (
    <div className="bg-white border hover:border-blue-500 border-gray-300 rounded-md shadow-sm text-left">
      <input
        className="w-full appearance-none px-3 py-2 rounded-md"
        onChange={(event: React.SyntheticEvent<HTMLInputElement>) =>
          onChange(event.currentTarget.value)
        }
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </div>
  );
};

export default Search;
