import TextBadge from "@/app/shared/components/badges/TextBadge";
import SecondaryTitle from "@/app/shared/components/texts/SecondaryTitle";
import { useIsExtraMobile, useIsLaptop, useIsMobile } from "@/app/shared/constants/mediaQueryConstants";
import AbstractSection from "@/app/shared/components/sections/AbstractSection";
import Image from "next/image";
import { useEffect, useState } from "react";
import MethodologyCard from "../components/MethodologyCard";

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

  const isLaptop = useIsLaptop();
  const isMobile = useIsMobile();
  const isExtraMobile = useIsExtraMobile();

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
    <div className="relative">
      <DottedBackground/>
      <AbstractSection>
        <div className="flex flex-col items-start space-y-6 pb-0 xs:pb-8">
          <TextBadge title="Nossa Metodologia" />
          <SecondaryTitle
            firstPart={isExtraMobile ? "Nós proporcionamos" : "Nós proporcionamos novas"}
            secondPart={isExtraMobile ? "novas oportunidades" : "oportunidades de crescimento"}
          />

          <div className={`flex ${isLaptop ? "flex-col-reverse space-y-0 xs:space-y-6" : "justify-between items-center space-x-8"} w-full`}>
            <div className="flex flex-col items-start space-y-6 pt-8 xs:pt-0">
              {cards.map((card, index) => (
                <MethodologyCard
                  key={index}
                  title={`${index + 1}. ${card.title}`}
                  body={isMobile ? card.mobileBody : card.body}
                  progress={index === activeIndex ? progress : 0}
                  isSelected={index === activeIndex}
                  onClick={() => handleCardClick(index)}
                />
              ))}
            </div>

            <div className={`pb-8 medium:pb-0 ${isLaptop ? 'pl-0' : 'pl-[8rem]'} justify-center mx-auto`}> 
              <Image
                src={cards[activeIndex].image}
                alt={cards[activeIndex].title}
                width={isLaptop ? 700: 1200}
                height={1000}
                className="rounded-lg"
                unoptimized
              />
            </div>
          </div>
        </div>
      </AbstractSection>
    </div>
  );
}


function DottedBackground() {
  return (
    <div className="absolute inset-0 flex justify-end -z-10">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className={`h-full w-px bg-gray-300/70`}
          style={{
            backgroundImage: 'linear-gradient(to bottom, #ffffff 33%, transparent 33%)',
            backgroundSize: '1px 15px',
            marginRight: i === 3 ? '9rem' : '16rem',
          }}
        />
      ))}
    </div>
  )
}
