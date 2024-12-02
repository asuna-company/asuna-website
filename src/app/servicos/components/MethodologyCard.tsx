interface MethodologyCardProps {
  title: string;
  body: string;
  progress?: number;
  isSelected?: boolean;
  onClick?: () => void;
}

export default function MethodologyCard({ title, body, progress, onClick, isSelected }: MethodologyCardProps) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center font-poppins rounded-full transition ${isSelected ? "text-neutral-200" : "text-[#919497]"} py-0 xs:py-2`}
    >
      <div className="flex w-auto flex-col items-start">
        <h1 className="font-heading font-bold text-left text-[22px] xs:text-[30px]">
          {title}
        </h1>
        {isSelected && (
          <>
            <h2 className="text-p1 text-start mt-2 xs:mt-4 opacity-90 pb-2">{body}</h2>
            <div className="relative w-full h-1 rounded-full bg-slate-200">
              <div
                className="absolute top-0 left-0 h-full bg-primary-500 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </>
        )}
      </div>
    </button>
  );
}