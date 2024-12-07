"use client"

import TextBadge from "@/app/shared/components/badges/TextBadge";
import AbstractSection from "@/app/shared/components/sections/AbstractSection";
import PrimaryText from "@/app/shared/components/texts/PrimaryTitle";
import ContactForm from "../internals/ContactForm";

import { useIsLaptop } from "@/app/shared/constants/mediaQueryConstants";
import { Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/app/shared/utils/utils";

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
              <CardInfoComponent
                label="E-mail"
                value="contato@asuna.com.br"
                type="email"
              />
              <CardInfoComponent
                label="WhatsApp"
                value="+55 47 99284-7889"
                type="phone"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 w-full laptop:w-1/2 p-0 laptop:pl-32"> <ContactForm/> </div>
      </AbstractSection>
    </div>
  )
}

interface CardInfoProps {
  label: string
  value: string
  type: 'email' | 'phone' | 'address'
}

function CardInfoComponent({ label, value, type }: CardInfoProps) {
  const icons = {
    email: Mail,
    phone: Phone,
    address: MapPin
  }

  const Icon = icons[type]

  return (
    <div className="group border rounded-lg border-gray-300 bg-gray-100/20">
      <div className="flex items-center gap-3 p-4">
        <div className={cn(
          "rounded-full p-2 transition-colors",
          "bg-blue-50 text-blue-500 group-hover:bg-blue-100"
        )}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="pl-2 space-y-1">
          {/* <p className="text-sm text-muted-foreground">{label}</p> */}
          <p className="text-base font-medium">{value}</p>
        </div>
      </div>
    </div>
  )
}
