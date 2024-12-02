"use client"

import TextBadge from "@/app/core/components/badges/TextBadge";
import AbstractSection from "@/app/core/components/sections/AbstractSection";
import PrimaryText from "@/app/core/components/texts/PrimaryTitle";
import ContactForm from "../internals/ContactForm";

import { useIsLaptop } from "@/app/core/constants/mediaQueryConstants";

const getBackgroundStyle = () => ({
  backgroundImage: "url('svg/lines.svg')",
  backgroundSize: "80rem",
  backgroundPosition: "top -80px left 0",
  backgroundRepeat: "no-repeat",
});

export default function ContactContentSection() {
  const isLaptop = useIsLaptop();

  return (
    <div style={getBackgroundStyle()} className="w-full text-left">
      <AbstractSection align="items-start" flex={`${isLaptop ? 'flex-col': 'flex-row'}`}>
        <div className="w-fit pt-4 xs:pt-24 text-left">
          <div className="space-x-3 mb-4">
            <TextBadge title="Contato" />
            <TextBadge title="Respondemos em até 24 horas!" />
          </div>
          <div className="max-w-[800px]">
            <PrimaryText titleFirstPart="Entre diretamente em" titleSecondPart="contato com o nosso time!" maxWidth={800} alignLeft={true} />
            <h2 className="mt-2 pl-1 leading-relaxed text-neutral-500"> 
              Fale com a Asuna e dê o primeiro passo para transformar suas ideias em projetos reais. Nossa equipe está pronta para entender
              suas necessidades e criar a melhor solução. 💙
            </h2>
          </div>
        </div>

        <div className="mt-8 w-full laptop:w-1/2 pl-32"> <ContactForm/> </div>
      </AbstractSection>
    </div>
  )
}
