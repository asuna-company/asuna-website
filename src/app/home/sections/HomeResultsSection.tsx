import TextBadge from "@/app/shared/components/badges/TextBadge";
import BudgetServicesButtons from "@/app/shared/components/buttons/combos/BudgetServicesButtons";
import NumberInfoCard from "@/app/shared/components/cards/NumberInfoCard";
import SecondaryTitle from "@/app/shared/components/texts/SecondaryTitle";
import AbstractSection from "@/app/shared/components/sections/AbstractSection";
import { useIsMobile } from "@/app/shared/constants/mediaQueryConstants";

import Image from "next/image";
import { useRouter } from "next/navigation";


export default function HomeResultsSection() {
  const useRouterConfig = useRouter();

  return (
    <AbstractSection align="items-start">
      <div className="flex flex-col items-start justify-start">
        <div className="pb-4 xs:pb-6 space-x-2">
          <TextBadge title="Resultados Exponenciais" />
          <div className="hidden md:inline-block"> <TextBadge title="Último Ano" /> </div> 
        </div>
        <div className="md:hidden">
          <SecondaryTitle firstPart="Resultados reais que" secondPart="movem sua operação"/>
        </div>
        <div className="hidden md:block">
          <SecondaryTitle firstPart="Resultados exponenciais que" secondPart="fazem a sua empresa transformar"/>
        </div>
        <h2 className="text-p1 text-gray-600 text-start mt-4 max-w-[680px] opacity-90 pb-4">
          A <span className="font-semibold">Asuna</span> é uma{" "}
          <span className="font-semibold">software house </span>
          comprometida em criar soluções que geram impacto na rotina da sua
          empresa. No último ano, entregamos projetos que fizeram a diferença
          para nossos clientes,
          <span className="font-semibold">{" "}aumentando a eficiência e reduzindo custos</span>.
        </h2>

        <div className="flex pt-4 pb-6">
          <NumberInfoCard number={50} numberSuffix="K+" tile="Pessoas impactadas" />
          <NumberInfoCard number={35} tile="Projetos entregues" showDivider={!useIsMobile()} />
          <div className="hidden md:block"><NumberInfoCard number={10} tile="Colaboradores ativos" showDivider={false}/></div> 
        </div>

        <BudgetServicesButtons onClickSecondaryButton={() => useRouterConfig.push("/servicos")} hideServicesButton={false}/>
      </div>

      <div className="flex justify-center md:justify-end mt-8 md:mt-0 md:ml-8 pr-0 xs:pr-4 items-center mx-auto xs:mx-0">
        <Image
          src="https://cdn.asuna.com.br/images/creative-001.webp"
          alt="Pessoas Sorrindo"
          width={500}
          height={500}
          decoding="async"
          priority
          className="rounded-lg"
        />
      </div>

    </AbstractSection>
  );
}
