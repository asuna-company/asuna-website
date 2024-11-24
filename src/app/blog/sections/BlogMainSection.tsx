"use client"

import Image from "next/image"

import AbstractSection from "@/app/core/components/sections/AbstractSection";
import TextBadge from "@/app/core/components/badges/TextBadge";
import PrimaryText from "@/app/core/components/texts/PrimaryTitle";

import { useIsMobile } from "@/app/core/constants/mediaQueryConstants";


const getBackgroundStyle = () => ({
  backgroundImage: "url('svg/lines.svg')",
  backgroundSize: "110rem",
  backgroundPosition: "top -80px left 0",
  backgroundRepeat: "no-repeat",
});


export default function BlogMainSection() {
  return (
    <div style={getBackgroundStyle()} className="w-full text-left">
      <AbstractSection align="items-start">
        <div className="pt-24 w-full text-left">
          <div className="space-x-3 mb-4">
            <TextBadge title="Nosso Blog" />
            <TextBadge title="Mercado de Software" />
          </div>
          <div className="text-left max-w-[850px]">
            <PrimaryText 
              titleFirstPart={useIsMobile() ? "Tudo relacionado ao" : "Tudo sobre software e o"} 
              titleSecondPart={useIsMobile() ? "mundo digital na sua mão!" : "mercado digital na sua mão!" }
              maxWidth={850} 
              alignLeft={true}  
            />
            <h3 className="mt-2 pl-1 leading-relaxed text-neutral-500"> 
              Bem-vindo ao blog da Asuna, onde tecnologia e mercado digital se encontram.
              Explore artigos feitos para quem busca compreender o futuro do desenvolvimento de software e dos negócios digitais. 💙
            </h3>
          </div>
        </div>

        <div className="pt-32">
          <div className="hidden md:flex"> <FigmaStar left="-left-16" /> </div>
          <div className="hidden md:flex"> <FigmaStar left="-left-72"/> </div>
        </div>
      </AbstractSection>
    </div>
  );  
}


function FigmaStar({left}: {left: string}) {
  return (
    <div className={`flex justify-start relative ${left}`}>
      <Image
        src="/svg/figma-4-stars.svg"
        alt="Star"
        className="opacity-90"
        width={128}
        height={128}
        priority
      />
    </div>
  );
}
