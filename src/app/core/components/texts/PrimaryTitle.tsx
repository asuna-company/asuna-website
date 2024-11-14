import { useIsMobile } from "../../constants/mediaQueryConstants";

interface PrimaryTextProps {
  maxWidth: number;
  titleFirstPart: string;
  titleSecondPart: string;
}

export default function PrimaryText({
  maxWidth,
  titleFirstPart,
  titleSecondPart,
}: PrimaryTextProps) {
  const textAlign = useIsMobile() ? "text-left" : "text-center";

  return (
    <h1
      className={`font-heading xs:text-[54px] text-[36px] font-bold text-neutral-200 ${textAlign} mx-auto pb-4 pt-4`}
      style={{ maxWidth: `${maxWidth}px` }}
    >
      {titleFirstPart}
      <span className="text-primary-500"> {titleSecondPart}</span>
    </h1>
  );
}
