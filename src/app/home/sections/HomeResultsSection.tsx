import TextBadge from "@/app/core/components/badges/TextBadge";
import BudgetServicesButtons from "@/app/core/components/buttons/combos/BudgetServicesButtons";
import NumberInfoCard from "@/app/core/components/cards/NumberInfoCard";
import SecondaryTitle from "@/app/core/components/texts/SecondaryTitle";
import AbstractSection from "@/app/core/components/sections/AbstractSection";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomeResultsSection() {
  const useRouterConfig = useRouter();

  return (
    <AbstractSection align="items-start">
      <div className="flex flex-col items-start justify-start">
        <div className="pb-4 xs:pb-6 space-x-2">
          <TextBadge title="Resultados" />
          <div className="hidden md:inline-block">
            <TextBadge title="Último Ano" />
          </div>
        </div>
        <div className="md:hidden">
          <SecondaryTitle
            firstPart="Resultados reais que"
            secondPart="movem sua operação"
          />
        </div>
        <div className="hidden md:block">
          <SecondaryTitle
            firstPart="Resultados exponenciais que"
            secondPart="fazem a sua empresa transformar"
          />
        </div>
        <h2 className="text-p1 text-gray-600 text-start mt-4 max-w-[680px] opacity-90 pb-4">
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
        </h2>

        <div className="flex py-4">
          <NumberInfoCard number={50} numberSuffix="K+" tile="Pessoas impactadas" />
          <NumberInfoCard number={35} tile="Projetos entregues" showDivider />
          <div className="hidden md:block"><NumberInfoCard number={10} tile="Colaboradores ativos" showDivider={false}/></div> 
        </div>


        {/* <p className="max-w-[680px] py-4 text-[14px] text-neutral-500">“Trabalhar com o time da Asuna foi uma experiência incrível! O time é ágil,
        atento aos detalhes e sempre disposto a encontrar as melhores soluções para o nosso projeto. Com certeza, recomendamos para quem busca
        qualidade e eficiência.” <span className="font-medium text-neutral-200 text-[13px]">- Odair Z.</span></p> */}

        <BudgetServicesButtons
          onClickSecondaryButton={() => useRouterConfig.push("/services")}
          hideServicesButton={false}
        />
      </div>

      <div className="flex justify-center md:justify-end mt-8 md:mt-0 md:ml-8 pr-0 xs:pr-4">
        <Image
          src="/images/creative-001.webp"
          alt="Pessoas Sorrindo"
          width={500}
          height={500}
          decoding="async"
          priority
          placeholder="blur"
          blurDataURL="/images/creative-001-placeholder.webp"
          sizes="(max-width: 500px) 256px, (max-width: 768px) 500px, (max-width: 1024px) 790px, 1000px"
          className="rounded-lg"
        />
      </div>
    </AbstractSection>
  );
}
