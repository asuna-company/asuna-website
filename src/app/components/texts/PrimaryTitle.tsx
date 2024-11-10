interface PrimaryTextProps {
  maxWidth: number,
  titleFirstPart: string
  titleSecondPart: string
}


export default function PrimaryText({maxWidth, titleFirstPart, titleSecondPart}: PrimaryTextProps) {
  return (
    <h1 className={`font-heading text-h0 font-bold text-neutral-200 text-center max-w-[${maxWidth}px] mx-auto pb-4 pt-4`}>
      {titleFirstPart}
      <span className="text-primary-500"> {titleSecondPart}</span>
    </h1>
  )
}
