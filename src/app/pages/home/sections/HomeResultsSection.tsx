
import TextBadge from "@/app/core/components/badges/TextBadge";
import PrimaryButton from "@/app/core/components/buttons/PrimaryButton";
import NumberInfoCard from "@/app/core/components/cards/NumberInfoCard";
import SecondaryTitle from "@/app/core/components/texts/SecondaryTitle";
import AbstractSection from "@/app/core/sections/AbstractSection";
import Image from "next/image";

export default function HomeResultsSection() {
  return (
    <AbstractSection align="items-start">
      <div className="flex flex-col items-start max-w-[700px] justify-start">
        <div className="pb-4 xs:pb-6">
          <TextBadge title="Resultados" />
        </div>
        <SecondaryTitle
          firstPart="Resultados concretos que"
          secondPart="transformam a sua empresa"
        />
        <p className="text-p1 text-gray-600 text-start mt-4 max-w-[550px] opacity-90">
          A <span className="font-semibold">Asuna</span> é uma{" "}
          <span className="font-semibold">software house </span>
          comprometida em criar soluções que geram impacto na rotina da sua
          empresa. No último ano, entregamos projetos que fizeram a diferença
          para nossos clientes,
          <span className="font-semibold">
            {" "}
            aumentando a eficiência e reduzindo custos
          </span>
          .
        </p>

    

        <div className="flex pt-4">
          <NumberInfoCard numberInfo="50K+" tile="Pessoas impactadas"/>
          <NumberInfoCard numberInfo="35+" tile="Projetos entregues"/>
          <NumberInfoCard numberInfo="10+" tile="Colaboradores ativos" showDivider={false}/>
        </div>

        <div className="pt-8">
          <PrimaryButton
            title="Solicitar Orçamento"
            onClick={() => alert("Button clicked!")}
          />
        </div>
      </div>

      <div className="flex justify-center md:justify-end mt-8 md:mt-0 md:ml-8 pr-0 xs:pr-4">
        <Image
          src="/images/creative-001.png"
          alt="Pessoas Sorrindo"
          width={480}
          height={480}
          className="rounded-lg"
          unoptimized
        />
      </div>
    </AbstractSection>
  );
}
