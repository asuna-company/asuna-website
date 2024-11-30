interface PrimaryTextProps {
  maxWidth: number;
  titleFirstPart: string;
  titleSecondPart?: string;
  isDarkMode?: boolean;
  useSecondUnderline?: boolean;
  alignLeft?: boolean;
  fontWeight?: string;
}

export default function PrimaryText({
  maxWidth,
  titleFirstPart,
  titleSecondPart = '',
  isDarkMode = false,
  useSecondUnderline = false,
  alignLeft = false,
  fontWeight = 'font-bold',
}: PrimaryTextProps) {
  const textColor = isDarkMode ? 'text-white' : 'text-neutral-200';
  const darkSecondaryStyle = `text-secondary-500 ${useSecondUnderline ?  'underline underline-offset-4 decoration-secondary-500' : ''}`;
  const lightSecondaryStyle = `text-primary-500  ${useSecondUnderline ? 'underline underline-offset-4 decoration-primary-500' : ''}`;
  const secondaryStyle = isDarkMode ? darkSecondaryStyle : lightSecondaryStyle;

  return (
    <h1
      className={`font-heading xs:text-[54px] text-[36px] ${fontWeight} ${textColor} ${alignLeft ? "text-left" : "md:text-center"} mx-auto xs:leading-[72px] pb-4 pt-4`} style={{ maxWidth: `${maxWidth}px` }}>
      {titleFirstPart} {""}
      <span className={secondaryStyle}>{titleSecondPart}</span>
    </h1>
  );
}
