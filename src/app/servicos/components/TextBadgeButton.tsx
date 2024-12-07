import Image from "next/image";

interface TextBadgeButtonProps {
  title: string;
  iconPath?: string;
  onClick?: () => void;
  isSelected?: boolean;
  textColor?: string;
}

export default function TextBadgeButton({
  title,
  iconPath,
  onClick,
  isSelected,
  textColor = 'text-primary-500'
}: TextBadgeButtonProps) {


  const buttonSelected = `${textColor} border-primary-100 bg-primary-50`
  const buttonUnselected = 'bg-[#797979] bg-opacity-10 border-[#797979] border-opacity-20 text-[#919497]'

  return (
    <button
      onClick={onClick}
      className={`flex items-center px-4 text-[15px] font-poppins font-semibold rounded-full border-[0.5px] transition ${
        isSelected ? buttonSelected : buttonUnselected
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
