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
      <select
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        className="w-full bg-white border hover:border-blue-500 border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.description}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
