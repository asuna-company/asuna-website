import { useIsMobile } from "../../constants/mediaQueryConstants";

interface PrimaryTextProps {
  maxWidth: number;
  titleFirstPart: string;
  titleSecondPart?: string;
  isDarkMode?: boolean;
}

export default function PrimaryText({
  maxWidth,
  titleFirstPart,
  titleSecondPart,
  isDarkMode = false
}: PrimaryTextProps) {
  const textAlign = useIsMobile() ? "text-left" : "text-center";
  const textColor = isDarkMode ? 'text-white' : 'text-neutral-200'

  return (
    <h1
      className={`font-heading xs:text-[54px] text-[36px] font-bold ${textColor} ${textAlign} mx-auto pb-4 pt-4`}
      style={{ maxWidth: `${maxWidth}px` }}
    >
      {titleFirstPart}
      <span className="text-primary-500"> {titleSecondPart}</span>
    </h1>
  );
}
