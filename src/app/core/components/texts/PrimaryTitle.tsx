interface PrimaryTextProps {
  maxWidth: number;
  titleFirstPart: string;
  titleSecondPart?: string;
  isDarkMode?: boolean;
  useSecondUnderline?: boolean;
}

export default function PrimaryText({
  maxWidth,
  titleFirstPart,
  titleSecondPart,
  isDarkMode = false,
  useSecondUnderline = false,
}: PrimaryTextProps) {
  const textColor = isDarkMode ? 'text-white' : 'text-neutral-200';
  const darkSecondaryStyle = `text-secondary-500 ${useSecondUnderline ?  'underline underline-offset-4 decoration-secondary-500' : ''}`;
  const lightSecondaryStyle = `text-primary-500  ${useSecondUnderline ? 'underline underline-offset-4 decoration-primary-500' : ''}`;
  const secondaryStyle = isDarkMode ? darkSecondaryStyle : lightSecondaryStyle;

  return (
    <h1 className={`font-heading xs:text-[54px] text-[36px] font-bold ${textColor} text-left md:text-center mx-auto pb-4 pt-4`} style={{ maxWidth: `${maxWidth}px` }}>
      {titleFirstPart} {""}
      <span className={secondaryStyle}>{titleSecondPart}</span>
    </h1>
  );
}
