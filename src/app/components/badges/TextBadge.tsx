interface TextBadgeProps {
  title: string;
}

export default function TextBadge({ title }: TextBadgeProps) {
  return (
    <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium border-">
      {title}
    </span>
  );
}