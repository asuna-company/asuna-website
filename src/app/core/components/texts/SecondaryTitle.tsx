interface SecondaryTitleProps {
  firstPart: string;
  secondPart: string
}

export default function SecondaryTitle({firstPart, secondPart}: SecondaryTitleProps) {
  return (
    <h2 className="text-h1 font-heading font-bold text-neutral-200 text-start mt-4">
     {firstPart}{" "}
      <span className="text-primary-500">{secondPart}</span>
  </h2>
  )
}

