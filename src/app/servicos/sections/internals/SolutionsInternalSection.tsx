import { ReactNode } from "react";

interface SolutionsInternalSectionProps {
  title: string;
  content: ReactNode;
}

export default function SolutionsInternalSection({title, content}: SolutionsInternalSectionProps) {
  return (
    <div className="flex flex-col-reverse laptop:flex-row w-full mx-0 px-0 space-x-0 laptop:space-x-48 items-center laptop:items-start">
      <div className={`w-full laptop: flex flex-col items-start justify-center space-y-4 px-0 pt-16 laptop:pt-0`}>  
        <h2 className="text-[32px] font-semibold text-secondary-500">{title}</h2>
        <h4 className="text-white/85 w-full xs:w-[90%] leading-8 text-pretty">{content}</h4>
      </div>

      <div className="w-full max-w-[700px] xs:pb-0">
        <div className="bg-gray-700 h-80 w-full rounded-lg" />
      </div>
    </div>
  );
}
