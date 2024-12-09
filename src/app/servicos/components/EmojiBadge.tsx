interface EmojiBadgeProps {
  emoji: string
  title: string
}

export default function EmojiBadge({emoji, title}: EmojiBadgeProps) {
  return (
    <div className="flex items-center space-x-2 rounded-full px-5 py-[0.45rem] border border-gray-200/15">
      <div className="text-[16px] bg-gray-300/5 rounded-full p-1">{emoji}</div>  
      <span className="text-white text-[14px] whitespace-nowrap">{title}</span>  
    </div>
  );
}

// 