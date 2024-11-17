import TextBadge from "@/app/core/components/badges/TextBadge";
import SecondaryTitle from "@/app/core/components/texts/SecondaryTitle";
import { useIsMobile } from "@/app/core/constants/mediaQueryConstants";
import AbstractSection from "@/app/core/sections/AbstractSection";
import Image from "next/image";
import { useEffect, useState } from "react";

const cards = [
  {
    id: "websites",
    title: "Análise de Requisitos",
    body: "Alinhamos com o cliente as necessidades e objetivos, mapeando requisitos essenciais para garantir que a solução atenda ao esperado, sem surpresas.",
    image:
      "https://media.discordapp.net/attachments/867116271300509736/1307404889277861982/Mask_group.png?ex=673a2f30&is=6738ddb0&hm=8ae63b704cbab4d92c1ba86da7094a27ff433d1300cffe4beef820113face2f8&=&format=webp&quality=lossless&width=524&height=358",
  },
  {
    id: "apps",
    title: "Apps",
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout readable content of a page when looking at its layout readable content of a page when looking at its layout.",
    image: "https://via.placeholder.com/500x300?text=Apps",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout readable content of a page when looking at its layout readable content of a page when looking at its layout.",
    image: "https://via.placeholder.com/500x300?text=UI%2FUX+Design",
  },
  {
    id: "consulting",
    title: "Consultoria",
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout readable content of a page when looking at its layout readable content of a page when looking at its layout.",
    image: "https://via.placeholder.com/500x300?text=Consultoria",
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
          firstPart={`${
            useIsMobile()
              ? "Nós proporcionamos novas"
              : "Nós proporcionamos novas"
          }`}
          secondPart={`${
            useIsMobile()
              ? "oportunidades de crescimento"
              : "oportunidades de crescimento"
          }`}
        />

        <div className="flex justify-center items-center space-x-8">
          <div className="flex flex-col items-start space-y-6 pr-20">
            <h2 className="text-p1 text-gray-600 text-start mt-4 max-w-xl opacity-90 pb-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </h2>
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
            className="rounded-lg flex-shrink-0 "
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
