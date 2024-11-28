import TextBadge from "@/app/core/components/badges/TextBadge";
import SecondaryTitle from "@/app/core/components/texts/SecondaryTitle";
import { useIsMobile } from "@/app/core/constants/mediaQueryConstants";
import AbstractSection from "@/app/core/components/sections/AbstractSection";
import Image from "next/image";
import { useEffect, useState } from "react";

const cards = [
  {
    id: "requirement_analysis",
    title: "Análise de Requisitos",
    body: "Alinhamos com o cliente as necessidades e objetivos, mapeando os requisitos essenciais para garantir que a solução atenda ao esperado, sem surpresas.",
    mobileBody: "Mapeamos objetivos e necessidades para garantir todos os resultados esperados.",
    image: "https://via.placeholder.com/500x300?text=Análise de Requisitos",
  },
  {
    id: "design",
    title: "UI/UX Design",
    body: "Desenhamos protótipos interativos e validamos com o você e toda sua equipe, criando interfaces bonitas e intuitivas, ajustada para ser usada da melhor forma.",
    mobileBody: "Criamos protótipos e interfaces bonitas e funcionais que dão o match perfeito.",
    image: "https://via.placeholder.com/500x300?text=Design",
  },
  {
    id: "development",
    title: "Desenvolvimento",
    body: "Criamos o software com checkpoints regulares para validar cada etapa com você e garantir que o resultado final atenda às suas expectativas.",
    mobileBody: "Desenvolvemos com etapas validadas para atender suas expectativas.",
    image: "https://via.placeholder.com/500x300?text=Desenvolvimento",
  },
  {
    id: "publication",
    title: "Publicação",
    body: "Lançamos o produto com todo o suporte necessário, garantindo uma transição suave e acompanhando os primeiros passos do seu projeto de software no ar.",
    mobileBody: "Lançamos o software com todo o suporte para que você tenha uma transição suave.",
    image: "https://via.placeholder.com/500x300?text=Publicação",
  },
];

export default function ServicesMethodologySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress === 100) setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 100);

    return () => clearInterval(interval);
  }, [progress]);

  const handleCardClick = (index: number) => {
    if (index === activeIndex) return;

    setActiveIndex(index);
    setProgress(0);
  };

  return (
    <AbstractSection>
      <div className="flex flex-col items-start space-y-6">
        <TextBadge title="Nossa Metodologia" />
        <SecondaryTitle
          firstPart={isMobile ? "Nós proporcionamos" : "Nós proporcionamos novas"}
          secondPart={isMobile ? "novas oportunidades": "oportunidades de crescimento"}
        />

        <div className={`flex ${isMobile ? "flex-col-reverse space-y-0 xs:space-y-6" : "justify-between items-center space-x-8"} w-full`}>
          <div className="flex flex-col items-start space-y-6 pt-8 xs:pt-0">
            {cards.map((card, index) => (
              <Card
                key={index}
                title={`${index + 1}. ${card.title}`}
                body={isMobile ? card.mobileBody : card.body}
                progress={index === activeIndex ? progress : 0}
                isSelected={index === activeIndex}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </div>

          <div className={`w-full ${isMobile ? "mb-4" : "md:w-1/2 pl-32"}`}>
            <Image
              src={cards[activeIndex].image}
              alt={cards[activeIndex].title}
              width={700}
              height={700}
              className="rounded-lg"
              unoptimized
            />
          </div>
        </div>
      </div>
    </AbstractSection>
  );
}

interface CardProps {
  title: string;
  body: string;
  progress?: number;
  isSelected?: boolean;
  onClick?: () => void;
}

function Card({ title, body, progress, onClick, isSelected }: CardProps) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center font-poppins rounded-full transition ${isSelected ? "text-neutral-200" : "text-[#919497]"} py-0 xs:py-2`}
    >
      <div className="flex w-full xs:w-[650px] flex-col items-start">
        <h1 className="font-heading font-bold text-left text-[22px] xs:text-[30px]">
          {title}
        </h1>
        {isSelected && (
          <>
            <h2 className="text-p1 text-start mt-2 xs:mt-4 opacity-90 pb-2">{body}</h2>
            <div className="relative w-full xs:w-[650px] h-1 rounded-full bg-slate-200">
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
