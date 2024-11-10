interface TextBadgeProps {
  title: string;
}

export default function TextBadge({ title }: TextBadgeProps) {
  return (
    <span className="px-4 py-2  text-primary-500 rounded-full font-medium border-[0.5px] border-primary-500/20"
      style={{ backgroundColor: '#dbdcef' }}>
      {title}
    </span>
  );
}
