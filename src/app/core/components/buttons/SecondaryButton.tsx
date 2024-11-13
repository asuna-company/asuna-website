import { useIsMobile } from "../../constants/mediaQueryConstants";

interface SecondaryButtonProps {
  title: string;
  mobileTitle?: string;
  onClick: () => void;
  fullWidth?: boolean;
  paddingY?: string;
}

function getButtonSizeClasses(fullWidth: boolean) {
  return fullWidth ? "w-full flex-grow h-auto px-5" : "inline-block h-auto px-5 mx-auto";
}

function getButtonLayoutClasses() {
  return "inline-block items-center justify-center";
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

function getButtonTransitionClasses() {
  return "transition-all duration-200 transform-origin-center";
}

function getButtonClasses(fullWidth: boolean) {
  return [
    getButtonSizeClasses(fullWidth),
    getButtonLayoutClasses(),
    getButtonBackgroundClasses(),
    getButtonTextClasses(),
    getButtonOutlineClasses(),
    getButtonHoverClasses(),
    getButtonTransitionClasses(),
  ].join(" ");
}

export default function SecondaryButton({
  title,
  mobileTitle = title,
  onClick,
  fullWidth = false,
  paddingY = "12.5px",
}: SecondaryButtonProps) {
  return (
    <button
      className={getButtonClasses(fullWidth)}
      style={{ paddingTop: `${paddingY}`, paddingBottom: `${paddingY}` }}
      onClick={onClick}
    >
      {useIsMobile() ? mobileTitle : title}
    </button>
  );
}
