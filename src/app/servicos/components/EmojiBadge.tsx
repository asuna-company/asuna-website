interface EmojiBadgeProps {
  emoji: string
  title: string
}

export default function EmojiBadge({emoji, title}: EmojiBadgeProps) {
  return (
    <div className="flex items-center space-x-2 bg-[#696969]/15 rounded-full px-5 py-3">
      <div className="text-[16px]">{emoji}</div>  
      <span className="text-white text-[14px] whitespace-nowrap">{title}</span>  
    </div>
  );
}