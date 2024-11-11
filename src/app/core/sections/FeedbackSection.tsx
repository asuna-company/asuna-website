import TextBadge from "@/app/core/components/badges/TextBadge";
import SecondaryTitle from "@/app/core/components/texts/SecondaryTitle";
import TestimonialCard from "../components/tiles/TestimonialCard";
import AbstractSection from "./AbstractSection";

export default function FeedbackSection() {
  return (
    <AbstractSection>
      <div className="flex flex-col items-start">
        <div className="flex gap-2">
          <TextBadge title="Feedbacks" />
          <TextBadge title="Último Semestre" />
        </div>
        <div className="max-w-[600px] mx-auto pt-2">
          <SecondaryTitle
            firstPart="Veja o que nossos clientes"
          secondPart="têm a dizer sobre a Asuna"
          />

          <p className="text-p1 text-gray-600 text-start mt-4 max-w-[590px] opacity-90 pb-2">
            O{" "} <span className="font-semibold">feedback dos nossos clientes</span>{" "}é muito importante para nós. É através dessas parcerias que ajustamos o rumo e{" "}
            <span className="font-semibold"> garantimos entregas cada vez melhores </span>. Veja a seguir alguns feedbacks!
          </p>

          <p className="text-p1 text-gray-600 text-start max-w-[590px] opacity-90 pt-1">
            Quem sabe o próximo depoimento não é o seu? Queremos te ver por aqui sendo o <span className="font-semibold">nosso próximo case de sucesso</span> 💙
          </p>
        </div>
      </div>

      <TestimonialCard />
    </AbstractSection>
  );
}



