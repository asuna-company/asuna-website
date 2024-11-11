import TextBadge from "@/app/core/components/badges/TextBadge";
import SecondaryTitle from "@/app/core/components/texts/SecondaryTitle";
import AbstractSection from "@/app/core/sections/abstract_section";
import Image from "next/image";

export default function FeedbackSection() {
  return (
    <AbstractSection>
      <div className="flex flex-col items-start">
        <TextBadge title="Feedbacks" />
        <SecondaryTitle
          firstPart="Veja o que nossos clientes"
          secondPart="têm a dizer sobre a Asuna"
        />
        <div className="max-w-[600px] mx-auto pt-2">
          <p className="text-p1 text-gray-600 text-start mt-4 max-w-[590px] opacity-90 pb-6">
            O{" "}
            <span className="font-semibold">feedback dos nossos clientes</span>{" "}
            é muito importante para nós. É através dessas parcerias que
            ajustamos o rumo e{" "}
            <span className="font-semibold">
              garantimos entregas cada vez melhores
            </span>
            . Veja a seguir alguns feedbacks!
          </p>
        </div>
      </div>

      <TestimonialCard />
    </AbstractSection>
  );
}

const TestimonialCard = () => {
  return (
    <div className="max-w-xl mx-auto p-6">
      <div className="mb-4">
        <Image
          src="/svg/quote.svg"
          alt="Citação"
          width={35}
          height={35}
          className="text-blue-500"
        />
      </div>

      <div>
        <p className="text-lg text-gray-800">
          O time da <span className="text-blue-600 font-semibold">Asuna</span>{" "}
          trouxe a{" "}
          <span className="text-blue-600 font-semibold">agilidade</span> e{" "}
          <span className="text-blue-600 font-semibold">clareza</span> que
          faltavam nos nossos projetos. Eles entenderam nossas necessidades e
          entregaram com muita{" "}
          <span className="text-blue-600 font-semibold">precisão</span> e{" "}
          <span className="text-blue-600 font-semibold">rapidez</span>, sem
          enrolação.
        </p>

        <div className="border-t border-gray-300 mt-6"></div>

        <div className="mt-4 text-gray-600">
          <span className="font-medium">José Formiga</span> @ Nasajon
        </div>
      </div>
    </div>
  );
};
