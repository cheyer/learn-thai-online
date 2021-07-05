export type BadgeType = "danger" | "warning" | "success" | "info";

interface Props {
  type: BadgeType;
}

const getColorClassname = (type: BadgeType) => {
  switch (type) {
    case "danger":
      return "bg-red-200 text-red-700";
    case "warning":
      return "bg-yellow-200 text-yellow-700";
    case "success":
      return "bg-green-200 text-green-700";
    default:
    case "info":
      return "bg-blue-200 text-blue-700";
  }
};

const Badge: React.FC<Props> = ({ children, type }) => {
  const color = getColorClassname(type);
  return <div className={`${color} px-2 py-0.5 rounded-lg`}>{children}</div>;
};

export default Badge;
