type OptionType = {
  description: string;
  value: string;
};

interface Props {
  label: string;
  onChange: (value: string) => void;
  options: OptionType[];
  value: string;
}

const Select: React.FC<Props> = ({ onChange, value, options, label }) => {
  return (
    <>
      <p className="text-sm font-medium text-gray-700">{label}</p>
      <div className="relative bg-white border hover:border-blue-500 border-gray-300 rounded-md shadow-sm text-left">
        <select
          value={value}
          onChange={(e) => onChange(e.currentTarget.value)}
          className="w-full appearance-none pl-3 pr-10 py-2 rounded-md"
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.description}
            </option>
          ))}
        </select>
        <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </div>
    </>
  );
};

export default Select;
