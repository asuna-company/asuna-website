interface TextBadgeProps {
  title: string;
}

export default function TextBadge({ title }: TextBadgeProps) {
  return (
    <span
      className="px-4 text-primary-500 text-p1 font-poppins font-semibold rounded-full border-[0.5px] border-primary-50"
      style={{ backgroundColor: '#dbdcef', paddingTop: '5.5px', paddingBottom: '5.5px' }}>
      {title}
    </span>
  );
}
