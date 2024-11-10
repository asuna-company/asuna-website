interface SecondaryButtonProps {
  title: string;
  onClick: () => void;
  paddingY?: string;
}

function getButtonLayoutClasses() {
  return "inline-block h-auto px-5 mx-auto items-center justify-center";
}

function getButtonBackgroundClasses() {
  return "bg-[var(--foreground)] rounded-lg";
}

function getButtonTextClasses() {
  return "text-p2 text-black font-poppins font-medium text-center";
}

function getButtonHoverClasses() {
  return "hover:bg-gray-100 hover:outline-primary-200";
}

function getButtonOutlineClasses() {
  return "outline outline-1 outline-[#ADADAD]";
}

function getButtonClasses() {
  return [
    getButtonLayoutClasses(),
    getButtonBackgroundClasses(),
    getButtonTextClasses(),
    getButtonOutlineClasses(),
    getButtonHoverClasses(),
  ].join(" ");
}

export default function SecondaryButton({
  title,
  onClick,
  paddingY = "12.5px",
}: SecondaryButtonProps) {
  return (
    <button
      className={getButtonClasses()}
      style={{ paddingTop: `${paddingY}`, paddingBottom: `${paddingY}` }}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
