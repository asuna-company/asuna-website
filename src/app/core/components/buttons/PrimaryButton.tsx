import { useIsMobile } from "@/app/core/constants/mediaQueryConstants";

interface PrimaryButtonProps {
  title: string;
  mobileTitle?: string;
  fullWidth?: boolean;
  onClick: () => void;
  paddingY?: string;
}

function getPrimaryButtonSizeClasses(fullWidth: boolean) {
  return fullWidth ? "w-full flex-grow h-auto px-5" : "inline-block h-auto px-5 mx-auto";
}

function getPrimaryButtonTextClasses() {
  return "text-center text-white font-poppins font-medium text-p2";
}

function getPrimaryButtonBackgroundClasses() {
  return "bg-primary-500 rounded-lg outline outline-[5px] outline-secondary-400/20";
}

function getPrimaryButtonHoverClasses() {
  return "hover:bg-blue-600 hover:outline-primary-200 hover:scale-101 hover:shadow-[0_0_5px_rgba(59,73,255,0.5)]"; 
}

function getPrimaryButtonTransitionClasses() {
  return "transition-all duration-200 transform-origin-center " ;
}

function getPrimaryButtonClasses(fullWidth: boolean) {
  return [
    getPrimaryButtonSizeClasses(fullWidth),
    getPrimaryButtonTextClasses(),
    getPrimaryButtonBackgroundClasses(),
    getPrimaryButtonHoverClasses(),
    getPrimaryButtonTransitionClasses(),
  ].join(" ");
}

export default function PrimaryButton({
  title,
  mobileTitle = title,
  fullWidth = false,
  onClick,
  paddingY = "12.5px",
}: PrimaryButtonProps) {
  return (
    <button
      className={getPrimaryButtonClasses(fullWidth)}
      style={{ paddingTop: paddingY, paddingBottom: paddingY }}
      onClick={onClick}
    >
      {useIsMobile() ? mobileTitle : title}
    </button>
  );
}
