import { ReactNode } from "react";

interface SolutionsInternalSectionProps {
  title: string;
  content: ReactNode;
}


export default function SolutionsInternalSection({title, content}: SolutionsInternalSectionProps) {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full mx-0 px-0 md:space-x-48 space-y-0 xs:space-y-4 items-start">
      <div className="md:w-1/2 flex flex-col items-start justify-center space-y-4 px-0">
        <h2 className="text-[32px] font-semibold text-secondary-500">{title}</h2>
        <h4 className="text-white/85 w-full xs:w-[90%] leading-relaxed text-pretty">{content}</h4>
      </div>

      <div className="md:w-1/2 w-full pb-8 xs:pb-0">
        <div className="bg-gray-700 h-80 w-full rounded-lg" />
      </div>
    </div>
  );
}


// Na Asuna, desenvolvemos websites com <span className="text-secondary-500 font-semibold">React</span> e Vue, frameworks renomados por 
// sua capacidade de criar interfaces dinâmicas e experiências de navegação fluidas, escolhidos por empresas como Facebook, Netflix e Spotify.
// Oferecemos uma experiência completa, explorando desde otimização de performance até a integração com APIs, para que seu site
// esteja sempre pronto para atender às necessidades dos usuários.