import { IConsonant } from "../data/consonants";

interface Props {
  consonant: IConsonant;
}

const Badge = ({ children }) => {
  return (
    <div className="bg-yellow-200 text-yellow-700 px-2 py-0.5 rounded-lg">
      {children}
    </div>
  );
};

const Row = ({ description, value }) => {
  return (
    <div className="flex justify-between mb-2">
      <span className="text-gray-500">{description}</span>
      <span>{value}</span>
    </div>
  );
};

const Card: React.FC<Props> = ({ consonant }) => {
  const rows = [
    { key: "example", value: consonant.thai },
    { key: "transliteration", value: consonant.rtgs },
    { key: "meaning", value: consonant.meaning },
    { key: "sounds like", value: consonant.meaning },
  ];

  return (
    <div className="bg-gray-50 px-10 py-5 m-6 rounded-3xl shadow-md">
      <div className="pb-10">
        <span className="text-9xl text-bold">{consonant.symbol}</span>
        <span className="text-7xl text-gray-500">
          {" / "}
          {consonant.transliteration}
        </span>
      </div>
      {rows.map((row) => (
        <Row description={row.key} value={row.value} />
      ))}

      <div className="flex justify-between">
        <span className="text-gray-500">tone class</span>
        <Badge>{consonant.class}</Badge>
      </div>
    </div>
  );
};

export default Card;
