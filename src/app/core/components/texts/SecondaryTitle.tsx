interface SecondaryTitleProps {
  firstPart: string;
  secondPart: string;
}

function getLayout() {
  return "flex flex-col items-start mt-4";
}

function getTextStyle() {
  return "text-h1 font-heading font-bold text-left";
}

function getSecondaryTitleClasses() {
  return [getLayout(), getTextStyle()].join(" ");
}

export default function SecondaryTitle({
  firstPart,
  secondPart,
}: SecondaryTitleProps) {
  return (
    <div className={getSecondaryTitleClasses()}>
      <h2 className="text-neutral-200">{firstPart}</h2>
      <h2 className="text-primary-500">{secondPart}</h2>
    </div>
  );
}