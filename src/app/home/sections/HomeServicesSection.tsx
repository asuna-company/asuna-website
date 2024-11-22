import TextBadge from "@/app/core/components/badges/TextBadge";
import CheckText from "@/app/core/components/check_text/CheckText";
import SecondaryTitle from "@/app/core/components/texts/SecondaryTitle";
import { useIsMobile } from "@/app/core/constants/mediaQueryConstants";
import AbstractSection from "@/app/core/components/sections/AbstractSection";
import Image from "next/image";

export default function HomeServicesSection() {
  return (
    <AbstractSection bgColor="bg-neutral-100">
      <div className="flex flex-col items-start">
        <div className="space-x-2">
        <TextBadge title="Serviços" />
        <TextBadge title="Mais Procurados" />
        </div>
        <SecondaryTitle
          firstPart={`${useIsMobile() ?'Seja qual for o setor' : 'Seja qual for a sua empresa'}`}
          secondPart={`${useIsMobile() ?'nós temos a solução' : 'nós temos a solução perfeita'}`}
        />

        <p className="text-p1 text-gray-600 text-start mt-4 max-w-[620px] opacity-90 pb-6">
          a <span className="font-semibold">Asuna</span> pode ajudar a
          desenvolver produtos de alto impacto para a sua empresa. Nós
          oferecemos um serviço especializado que potencializa sua marca por
          meio de{" "}
          <span className="font-semibold">
            aplicativos, sites, consultoria e UI/UX.
          </span>
        </p>

        <div className="grid grid-cols-2 gap-6 w-full mt-4 items-start justify-start">
          <CheckText title="Desenvolvimento Mobile" mobileTitle="Apps Mobile" />
          <CheckText title="Integração de IA" />
          <CheckText title="Desenvolvimento Web" mobileTitle="Websites" />
          <CheckText title="Soluções para SaaS e MVPs" mobileTitle="SaaS e MVPs" />
          <CheckText title="UI/UX Design" />
          <CheckText title="Consultoria de Software" mobileTitle="Consultoria" />
        </div>
      </div>

      {!useIsMobile() && <ImageServiceSteps/>}

    </AbstractSection>
  );
};

function ImageServiceSteps() {
  return (
    <div className="flex justify-center md:justify-center mt-8 md:mt-0 w-full md:w-auto pt-16 pl-0 xs:pl-32">
      <Image
        src="/svg/details_section.svg"
        alt="Etapas de Desenvolvimento da Asuna"
        width={640}
        height={380}
        className="rounded-lg"
      />

    </div>
  )
}
