import Badge, { BadgeType } from "../Badge";

interface Props {
  badgeText: string;
  badgeType: BadgeType;
  description: string;
  headline: string;
}

const Feature: React.FC<Props> = ({
  badgeText,
  badgeType,
  description,
  headline,
}) => (
  <div className="mb-6">
    <div className="flex justify-start mb-2">
      <h3 className="text-xl font-bold">{headline}</h3>
      <div className="ml-6">
        <Badge type={badgeType}>{badgeText}</Badge>
      </div>
    </div>
    <p>{description}</p>
  </div>
);

export default function Header() {
  return (
    <header className="pb-20">
      <nav className="py-10">
        <p className="text-2xl font-bold">learnthai.online</p>
      </nav>
      <div className="text-center py-20">
        <h1 className="text-7xl font-bold mb-6">Want to read ภาษาไทย?</h1>
        <p className="text-4xl">
          With learnthai.online you can easily learn the Thai Alphabet in no
          time ⏱
        </p>
      </div>
      {/* <p>Learn Thai Consonants</p>
      <div className="flex">
        <Badge type="success">available</Badge>
      </div>
      <p>Learn Thai Vowels</p>
      <div className="flex">
        <Badge type="warning">coming soon</Badge>
      </div>
      <p>Learn Thai Numbers</p>
      <div className="flex">
        <Badge type="warning">coming soon</Badge>
      </div> */}
      <h2 className="text-4xl font-bold mb-6">Features</h2>
      <Feature
        headline="Learn Thai Consonants"
        badgeText="available"
        description="Learn all 44 Thai consonants, their pronounciation, meaning and class!"
        badgeType="success"
      />
      <Feature
        headline="Learn Thai Vowels"
        badgeText="coming soon"
        description="Learn all 16 Thai vowels that are short and long and can be wildly combined!"
        badgeType="warning"
      />
      <Feature
        headline="Learn Thai Numerals"
        badgeText="coming soon"
        description="Learn Thai numerals and master prices, telephone numbers and more!"
        badgeType="warning"
      />
      <Feature
        headline="Learn with Bot"
        badgeText="coming soon"
        description="Learn the Thai alphabet by playing a quiz game with a bot!"
        badgeType="warning"
      />
    </header>
  );
}
