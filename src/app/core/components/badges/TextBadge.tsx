interface TextBadgeProps {
  title: string;
  mobileTitle?: string;
  textColor?: string;
}

export default function TextBadge({ title, mobileTitle = title, textColor = "text-primary-500" }: TextBadgeProps) {
  return (
    <span
      className={`px-4 ${textColor} text-[16px] font-poppins font-semibold rounded-full border-[0.5px] border-primary-50 bg-primary-50`}
      style={{ paddingTop: "5.5px", paddingBottom: "5.5px"}}
    >
      <span className="md:inline hidden">{title}</span>
      <span className="md:hidden">{mobileTitle}</span>
    </span>
  );
}