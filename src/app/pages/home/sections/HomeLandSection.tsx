import TextBadge from "@/app/core/components/badges/TextBadge";
import PrimaryButton from "@/app/core/components/buttons/PrimaryButton";
import SecondaryButton from "@/app/core/components/buttons/SecondaryButton";
import PrimaryText from "@/app/core/components/texts/PrimaryTitle";
import AbstractSection from "@/app/core/sections/AbstractSection";

import Image from "next/image";

const getBackgroundStyle = () => ({
  backgroundImage: "url('svg/lines.svg')",
  backgroundSize: "80rem",
  backgroundPosition: "top -80px left 0",
  backgroundRepeat: "no-repeat",
});

export default function HomeLandSection() {
  return (
    <AbstractSection>
      <LeftStar />
      <section
        className="flex flex-col items-center justify-center w-full pb-44 pt-24 bg-cover bg-no-repeat bg-center"
        style={getBackgroundStyle()}
      >
        <div className="flex space-x-3 mb-4">
          <TextBadge title="Tecnologia e Inovação" />
          <TextBadge title="98% Satisfação" />
        </div>

        <PrimaryText
          maxWidth={700}
          titleFirstPart="Softwares que aceleram o futuro do"
          titleSecondPart="seu negócio!"
        />

        <p className="text-p1 text-gray-600 text-center mt-4 max-w-[600px] mx-auto opacity-90">
          Somos uma <span className="font-semibold">software house B2B</span>{" "}
          para pequenas e médias empresas, simplificando processos e{" "}
          <span className="font-semibold">impulsionando resultados</span> no seu
          negócio 💙
        </p>

        <div className="flex space-x-4 mt-8">
          <PrimaryButton
            title="Solicite um Orçamento"
            mobileTitle="Falar com a Asuna"
            onClick={() => alert("Button clicked!")}
          />
          <SecondaryButton
            title="Conheça nossos Serviços"
            onClick={() => alert("Button clicked!")}
          />
        </div>
      </section>
      <RightStar />
    </AbstractSection>
  );
}

function LeftStar() {
  return (
    <div className="flex justify-start mt-[-24rem] ">
      <Image
        src="/svg/figma-4-stars.svg"
        alt="Star"
        className="top-[28rem] left-16 max-medium:left-16 w-24 h-24 opacity-90"
        width={96}
        height={96}
        priority
      />
    </div>
  );
}

function RightStar() {
  return (
    <div className="flex justify-start ">
      <Image
        src="/svg/figma-4-stars.svg"
        alt="Star"
        className="top-[28rem] left-16 max-medium:left-16 w-24 h-24 opacity-90"
        width={96}
        height={96}
        priority
      />
    </div>
  );
}
