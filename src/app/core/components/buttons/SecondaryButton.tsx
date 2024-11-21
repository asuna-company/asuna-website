interface SecondaryButtonProps {
  title: string;
  onClick: () => void;
  fullWidth?: boolean;
  paddingY?: string;
  textColor?: string;
  isDarkMode?: boolean;
}

function getButtonSizeClasses(fullWidth: boolean) {
  return fullWidth
    ? "w-full h-auto px-5"
    : "inline-block w-auto h-auto px-5 mx-auto";
}

function getButtonTextClasses() {
  return "text-center font-poppins font-medium text-p2 break-words whitespace-nowrap";
}

function getButtonBackgroundClasses(isDarkMode: boolean) {
  const backgroundColor = isDarkMode ? "bg-[#333]" : "bg-[var(--foreground)]";
  const outlineColor = isDarkMode ? "outline-[#666]" : "outline-[#ADADAD]";
  return `${backgroundColor} rounded-lg outline outline-1 ${outlineColor}`;
}

function getButtonHoverClasses(isDarkMode: boolean) {
  const hoverColor = isDarkMode ? 'hover:bg-[#FFFFFF1A]' : 'hover:bg-gray-100';
  return `${hoverColor} hover:outline-primary-200 hover:scale-101 hover:shadow-[0_0_5px_rgba(59,73,255,0.5)]`;
}

function getButtonTransitionClasses() {
  return "transition-all duration-200 transform-origin-center";
}

function getButtonClasses(fullWidth: boolean, isDarkMode: boolean) {
  return [
    getButtonSizeClasses(fullWidth),
    getButtonTextClasses(),
    getButtonBackgroundClasses(isDarkMode),
    getButtonHoverClasses(isDarkMode),
    getButtonTransitionClasses(),
  ].join(" ");
}

export default function SecondaryButton({
  title,
  onClick,
  fullWidth = false,
  paddingY = "12.5px",
  isDarkMode = false
}: SecondaryButtonProps) {
  const textColor = isDarkMode ? "#FFFFFF" : "#000000";

  return (
    <button
      className={getButtonClasses(fullWidth, isDarkMode)}
      style={{ paddingTop: paddingY, paddingBottom: paddingY, color: textColor }}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
