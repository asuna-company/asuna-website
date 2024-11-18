import TextBadge from "@/app/core/components/badges/TextBadge";
import SecondaryTitle from "@/app/core/components/texts/SecondaryTitle";
import AbstractSection from "@/app/core/sections/AbstractSection";
import Image from "next/image";
import { useEffect, useState } from "react";

const cards = [
  {
    id: "requirement_analysis",
    title: "Análise de Requisitos",
    body: "Alinhamos com o cliente as necessidades e objetivos, mapeando requisitos essenciais para garantir que a solução atenda ao esperado, sem surpresas.",
    image:
      "https://via.placeholder.com/500x300?text=Análise de Requisitos",
  },
  {
    id: "design",
    title: "UI/UX Design",
    body: "Desenhamos protótipos interativos e validamos com o você e sua equipe, criando interfaces bonitas e intuitivas, ajustadas para quem vai usar.",
    image: "https://via.placeholder.com/500x300?text=Design",
  },
  {
    id: "development",
    title: "Desenvolvimento",
    body: "Criamos o software com checkpoints regulares para validar cada etapa e garantir que o resultado final atenda às expectativas de você e sua equipe.",
    image: "https://via.placeholder.com/500x300?text=Desenvolvimento",
  },
  {
    id: "publication",
    title: "Publicação",
    body: "Lançamos o produto com todo o suporte necessário, garantindo uma transição suave e acompanhando os primeiros passos no ar.",
    image: "https://via.placeholder.com/500x300?text=Publicação",
  },
];

export default function ServicesMethodologySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress === 100) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
      }

      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 100);

    return () => clearInterval(interval);
  }, [progress]);

  const handleCardClick = (index: number) => {
    if (index == activeIndex) return;

    setActiveIndex(index);
    setProgress(0);
  };

  return (
    <AbstractSection>
      <div className="flex flex-col items-start space-y-6">
        <TextBadge title="Nossa Metodologia" />
  
        <SecondaryTitle
          firstPart="Nós proporcionamos novas"
          secondPart="oportunidades de crescimento"
        />
  
        <h2 className="text-p1 text-gray-600 text-start mt-4 max-w-xl opacity-90 pb-4">
          It is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout.
        </h2>
  
        <div className="flex justify-center items-center space-x-8">
          <div className="flex flex-col items-start space-y-6 pr-20">
            {cards.map((card, index) => (
              <Card
                key={index}
                title={`${index + 1}. ${card.title}`}
                body={card.body}
                progress={index === activeIndex ? progress : 0}
                isSelected={index === activeIndex}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </div>
  
          <Image
            src={cards[activeIndex].image}
            alt={cards[activeIndex].title}
            width={700}
            height={700}
            className="rounded-lg flex-shrink-0"
            unoptimized
          />
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
      className={`flex w-full  items-center font-poppins rounded-full transition ${
        isSelected ? "text-neutral-200" : "text-[#919497]"
      }`}
      style={{
        paddingTop: "5.5px",
        paddingBottom: "5.5px",
      }}
    >
      <div className="flex w-[650px] flex-col items-start space-y-2 ">
        <h1 className="text-h1 font-heading font-bold text-left text-[30px] xs:text-[32px]">
          {title}
        </h1>
        {isSelected && (
          <>
            <h2 className="text-p1 text-start mt-4 opacity-90 pb-2">{body}</h2>
            <div
              className="h-1 bg-blue-600 transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </>
        )}
      </div>
    </button>
  );
}
