import { useIsMobile } from "../../constants/mediaQueryConstants";

interface TextBadgeProps {
  title: string;
  mobileTitle?: string;
}

export default function TextBadge({ title, mobileTitle = title }: TextBadgeProps) {
  return (
    <span
      className="px-4 text-primary-500 text-[16px] font-poppins font-semibold rounded-full border-[0.5px] border-primary-50 bg-primary-50"
      style={{
        paddingTop: "5.5px",
        paddingBottom: "5.5px",
      }}
    >
      {useIsMobile() ? mobileTitle : title}
    </span>
  );
}
