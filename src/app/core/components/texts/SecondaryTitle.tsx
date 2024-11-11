interface SecondaryTitleProps {
  firstPart: string;
  secondPart: string;
}

export default function SecondaryTitle({
  firstPart,
  secondPart,
}: SecondaryTitleProps) {
  return (
    <div className="flex flex-col items-start mt-4">
      <h2 className="text-h1 font-heading font-bold text-neutral-200 text-left">
        {firstPart}
      </h2>
      <h2 className="text-h1 font-heading font-bold text-primary-500 text-left">
        {secondPart}
      </h2>
    </div>
  );
}
