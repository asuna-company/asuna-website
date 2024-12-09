"use client"

import TextBadge from "@/app/shared/components/badges/TextBadge";
import AbstractSection from "@/app/shared/components/sections/AbstractSection";
import PrimaryText from "@/app/shared/components/texts/PrimaryTitle";

import ContactFormComponent from "../internals/ContactFormComponent";
import CardInfoComponent from "../internals/CardInfoComponent";

import { useIsLaptop } from "@/app/shared/constants/mediaQueryConstants";
import { SocialMediaBadgeComponent } from "@/app/shared/components/badges/SociaMediaBadgeComponent";

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
            <ContactInfoInternalSection/>
          </div>
        </div>

        <div className="mt-8 w-full laptop:w-1/2 p-0 laptop:pl-32"> <ContactFormComponent/> </div>
      </AbstractSection>
    </div>
  )
}

function ContactInfoInternalSection() {
  return (
    <div className="flex flex-row space-x-32 pt-10">
      <div className="flex flex-col">
        <div className="flex flex-col space-y-4">
          <CardInfoComponent label="E-mail" value="contato@asuna.com.br" type="email"/>
          <CardInfoComponent label="WhatsApp" value="+55 47 99284-7889" type="phone"/>
        </div>
        <div className="flex flex-row pt-6 space-x-3">
          <SocialMediaBadgeComponent type="linkedin"/>
          <SocialMediaBadgeComponent type="instagram"/>
          <SocialMediaBadgeComponent type="medium"/>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <p className="text-lg font-medium">Endereço</p>
        <p className="text-[15px] max-w-72 ">Avenida Paulista, 1106 - Bela Vista, São Paulo - SP, 01310-914</p>
      </div>
    </div>
  )
}