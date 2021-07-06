import { ConsonantClass, IConsonant } from "../data/consonants";
import Badge, { BadgeType } from "./Badge";

const getType = (tone: ConsonantClass): BadgeType => {
  switch (tone) {
    case ConsonantClass.high:
      return "danger";
    case ConsonantClass.mid:
      return "warning";
    default:
    case ConsonantClass.low:
      return "success";
  }
};

interface Props {
  consonant: IConsonant;
}

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
    // { key: "sounds like", value: consonant.meaning },
  ];

  return (
    <li className="bg-gray-50 hover:bg-gray-100 px-5 md:px-10 py-5 mb-6 rounded-3xl shadow-md">
      <div className="pb-10">
        <span className="text-9xl text-bold">{consonant.symbol}</span>
        <span className="text-7xl text-gray-500">
          {" / "}
          {consonant.transliteration}
        </span>
      </div>
      {rows.map((row) => (
        <Row key={row.key} description={row.key} value={row.value} />
      ))}

      <div className="flex justify-between">
        <span className="text-gray-500">tone class</span>
        <Badge type={getType(consonant.class)}>{consonant.class}</Badge>
      </div>
    </li>
  );
};

export default Card;
