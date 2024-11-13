import { useIsMobile } from "../../constants/mediaQueryConstants"

interface PrimaryTextProps {
  maxWidth: number,
  titleFirstPart: string
  titleSecondPart: string
}


export default function PrimaryText({maxWidth, titleFirstPart, titleSecondPart}: PrimaryTextProps) {
  const textAlign = useIsMobile() ? 'text-left' : 'text-center'

  return (
    <h1 className={`font-heading xs:text-h0 text-[36px] font-bold text-neutral-200 ${textAlign} max-w-[${maxWidth}px] mx-auto pb-4 pt-4`}>
      {titleFirstPart}
      <span className="text-primary-500"> {titleSecondPart}</span>
    </h1>
  )
}
