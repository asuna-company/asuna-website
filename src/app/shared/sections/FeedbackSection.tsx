import TextBadge from "@/app/shared/components/badges/TextBadge";
import SecondaryTitle from "@/app/shared/components/texts/SecondaryTitle";
import TestimonialCard from "../components/tiles/TestimonialCard";
import AbstractSection from "../components/sections/AbstractSection";
import NumberInfoCard from "../components/cards/NumberInfoCard";
import { useIsMobile } from "../constants/mediaQueryConstants";

export default function FeedbackSection() {
  return (
    <AbstractSection align="items-center">
      <div className="flex flex-col items-start">
        <div className="flex gap-2">
          <TextBadge title="Feedbacks" />
          <TextBadge title="Último Semestre" />
        </div>
        <div className="max-w-[600px] mx-auto pt-2">
          <SecondaryTitle firstPart="Veja o que as pessoas" secondPart={`${useIsMobile() ? 'têm a dizer sobre nós': 'têm a dizer sobre a Asuna'}`}/>

          <p className="text-p1 text-gray-600 text-start mt-4 max-w-[590px] opacity-90 pb-2">
            O{" "} <span className="font-semibold">feedback dos nossos clientes</span>{" "}é muito importante para nós. É através dessas parcerias que ajustamos o rumo e{" "}
            <span className="font-semibold"> garantimos entregas cada vez melhores </span>. Veja a seguir alguns feedbacks 💙
          </p>

          <div className="flex pt-4">
            <NumberInfoCard number={4.9} isDecimal={true} tile="Avaliação média"/>
            <NumberInfoCard number={30} tile="Clientes satisfeitos" showDivider={!useIsMobile()}/>
            {!useIsMobile() && <NumberInfoCard number={35} tile="Projetos entregues" showDivider={false}/>}
          </div>
        </div>
      </div>

      <div className="pt-0 xs:pt-12"><TestimonialCard /></div>
    </AbstractSection>
  );
}




