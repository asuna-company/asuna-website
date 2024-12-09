import LeftArrowImage from "@/app/shared/components/images/arrows/LeftArrowImage";
import RightArrowImage from "@/app/shared/components/images/arrows/RightArrowImage";

type ScrollButtonProps = {
  type: "left" | "right";
  onClick: () => void;
};

export default function ScrollButtonComponent({ type, onClick }: ScrollButtonProps) {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 transform -translate-y-1/2 z-10 bg-secondary-500 text-white p-2 rounded-full shadow-md focus:outline-none"
      style={{[type === "left" ? "left" : "right"]: "-10px"}}
    >
      {type === "left" ? <LeftArrowImage /> : <RightArrowImage />}
    </button>
  );
}