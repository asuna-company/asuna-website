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
          <div className="max-w-full xs:max-w-[800px]">
            <PrimaryText titleFirstPart="Entre diretamente em" titleSecondPart="contato com o nosso time!" maxWidth={800} alignLeft={true} />
            <h2 className="mt-2 pl-1 leading-relaxed text-neutral-500">
              <p>Fale com a Asuna e dê o primeiro passo para transformar suas ideias em projetos reais. Nossa equipe está pronta para entender suas necessidades e criar a melhor solução. 💙</p>
              <p className="mt-4">Conte com a gente para transformar suas ideias em algo concreto e impactante. Na Asuna, estamos aqui para ouvir você, entender cada detalhe e construir algo que realmente faça a diferença para o seu negócio.</p>
            </h2>
          </div>
        </div>

        <div className="mt-8 w-full laptop:w-1/2 p-0 laptop:pl-32"> <ContactForm/> </div>
      </AbstractSection>
    </div>
  )
}
