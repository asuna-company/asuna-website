"use client"

import TextBadge from "@/app/shared/components/badges/TextBadge";
import AbstractSection from "@/app/shared/components/sections/AbstractSection";
import PrimaryText from "@/app/shared/components/texts/PrimaryTitle";

import ContactForm from "../internals/ContactForm";
import CardInfoComponent from "../internals/CardInfoComponent";

import { useIsLaptop } from "@/app/shared/constants/mediaQueryConstants";

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
          <div className="space-x-3 mb-4"> <TextBadge title="Contato" /> </div>
          <div className="max-w-full xs:max-w-[800px]">
            <PrimaryText titleFirstPart="Entre diretamente em" titleSecondPart="contato com o nosso time!" maxWidth={800} alignLeft={true} />
            <h2 className="mt-2 pl-1 leading-relaxed text-neutral-500">
              Fale com a Asuna e dê o primeiro passo para transformar suas ideias em projetos reais. Nossa equipe está pronta para entender suas necessidades e criar a melhor solução. 💙
            </h2>
            <div className="flex flex-col">
              <div className="flex flex-col space-y-4 pt-8">
                <CardInfoComponent label="E-mail" value="contato@asuna.com.br" type="email"/>
                <CardInfoComponent label="WhatsApp" value="+55 47 99284-7889" type="phone"/>
              </div>
              <div className="flex flex-row">
                  
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 w-full laptop:w-1/2 p-0 laptop:pl-32"> <ContactForm/> </div>
      </AbstractSection>
    </div>
  )
}