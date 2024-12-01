import TextBadge from "@/app/core/components/badges/TextBadge";
import CheckText from "@/app/core/components/check_text/CheckText";
import SecondaryTitle from "@/app/core/components/texts/SecondaryTitle";
import { useIsExtraMobile, useIsMobile } from "@/app/core/constants/mediaQueryConstants";
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
          firstPart={`${useIsExtraMobile() ?'Seja qual for o setor' : 'Seja qual for a sua empresa'}`}
          secondPart={`${useIsExtraMobile() ?'nós temos a solução' : 'nós temos a solução perfeita'}`}
        />

        <p className="text-p1 text-gray-600 text-start mt-4  max-w-max small-975:max-w-[620px] opacity-90 pb-6">
          a <span className="font-semibold">Asuna</span> pode ajudar a
          desenvolver produtos de alto impacto para a sua empresa. Nós
          oferecemos um serviço especializado que potencializa sua marca por
          meio de{" "}
          <span className="font-semibold"> aplicativos, sites, consultoria e UI/UX. </span>
        </p>

        <div className="grid grid-cols-2 xs:grid-cols-3 small-975:grid-cols-2 gap-6 w-full mt-4 items-start justify-start">
          <CheckText title="Desenvolvimento Mobile" mobileTitle="Apps Mobile" />
          <CheckText title="Integração de IA" />
          <CheckText title="Desenvolvimento Web" mobileTitle="Websites" />
          <CheckText title="Soluções para SaaS" mobileTitle="SaaS e MVPs" />
          <CheckText title="UI/UX Design" />
          <CheckText title="Consultoria Especializada" mobileTitle="Consultoria" />
        </div>

      </div>

      <div className="hidden medium-1290:flex"><ImageServiceSteps/></div>
      {!useIsMobile() && <div className="flex medium-1290:hidden "> <Stars /> </div>}
    </AbstractSection>
  );
};

function ImageServiceSteps() {
  return (
    <div className="flex justify-center md:justify-center mt-8 md:mt-0 w-full md:w-auto pt-16 pl-0 medium:pl-32 xs:pl-4">
      <Image
        src="https://cdn.asuna.com.br/svg/details_section.svg"
        alt="Etapas de Desenvolvimento da Asuna"
        width={640}
        height={380}
        className="rounded-lg"
      />
    </div>
  )
}

function Stars() {
  return (
    <div className="hidden flex-row relative small-975:flex pr-8">
      <div className="flex justify-start relative top-24 right-0 small-1080:right-16">
        <Image src="https://cdn.asuna.com.br/svg/figma-4-stars.svg" alt="Estrela da Esquerda"
          className="left-16 max-medium:left-16 opacity-90" width={128} height={128} priority
        />
      </div>
      <div className="flex justify-start relative -top-24">
        <Image src="https://cdn.asuna.com.br/svg/figma-4-stars.svg" alt="Estrela da Esquerda"
          className="left-16 max-medium:left-16 opacity-90" width={128} height={128} priority
        />
      </div>
    </div>
  );
}