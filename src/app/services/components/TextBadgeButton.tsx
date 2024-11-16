import Image from "next/image";

interface TextBadgeButtonProps {
  title: string;
  iconPath?: string;
  onClick?: () => void;
  isSelected?: boolean;
}

export default function TextBadgeButton({
  title,
  iconPath,
  onClick,
  isSelected,
}: TextBadgeButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-4 text-[16px] font-poppins font-semibold rounded-full border-[0.5px] transition ${
        isSelected
          ? "text-primary-500 border-primary-100 bg-primary-50"
          : "bg-[#797979] bg-opacity-10 border-[#797979] border-opacity-20 text-[#919497]"
      }`}
      style={{
        paddingTop: "5.5px",
        paddingBottom: "5.5px",
      }}
    >
      {iconPath && (
        <Image
          src={iconPath}
          alt="Icon"
          width={24}
          height={24}
          className="mr-2"
        />
      )}
      {title}
    </button>
  );
}
