
import TextBadge from "@/app/core/components/badges/TextBadge";
import BudgetServicesButtons from "@/app/core/components/buttons/combos/BudgetServicesButtons";
import PrimaryText from "@/app/core/components/texts/PrimaryTitle";
import { useIsMobile } from "@/app/core/constants/mediaQueryConstants";
import AbstractSection from "@/app/core/sections/AbstractSection";

import Image from "next/image";
import { useRouter } from "next/navigation";

const getBackgroundStyle = () => ({
  backgroundImage: "url('svg/lines.svg')",
  backgroundSize: "80rem",
  backgroundPosition: "top -80px left 0",
  backgroundRepeat: "no-repeat",
});

export default function HomeLandSection() {
  const textAlign = useIsMobile() ? "text-left" : "text-center";
  const useRouterConfig = useRouter()

  return (
    <AbstractSection>
      {!useIsMobile() && <LeftStar />}

      <section className="flex flex-col items-center justify-center w-full xs:pt-24 bg-cover bg-no-repeat bg-center" style={getBackgroundStyle()}>
        <div className="flex w-full xs:w-auto space-x-3 mb-2 xs:mb-4">
          <TextBadge title="#1 Região Sul" />
          <TextBadge title="Soluções diretas para B2B" mobileTitle="Soluções para B2B" />
        </div>

        <PrimaryText
          maxWidth={850}
          titleFirstPart="A software house ideal para fazer"
          titleSecondPart="sua empresa crescer!"
        />

        <h2 className={`text-p1 text-gray-600 ${textAlign} mt-1 xs:mt-0 max-w-[600px] mx-auto opacity-90`}>
          Somos a Asuna, uma <span className="font-semibold">software house B2B</span>{" "}
          para pequenas e médias empresas, <span className="font-semibold">simplificamos processos</span> e{" "}
          <span className="font-semibold">impulsionamos</span> a sua empresa 💙
        </h2>

        <BudgetServicesButtons isMobile={useIsMobile()} onClickSecondaryButton={() => useRouterConfig.push('/services')} />
      </section>

      {!useIsMobile() && <RightStar />}
    </AbstractSection>
  );
}


function LeftStar() {
  return (
    <div
      className={`flex justify-start mt-[-12rem]`}>
      <Image
        src="/svg/figma-4-stars.svg"
        alt="Star"
        className="left-16 max-medium:left-16 opacity-90"
        width={128}
        height={128}
        priority
      />
    </div>
  );
}

function RightStar() {
  return (
    <div className={`flex justify-start mt-[12rem]`}>
      <Image
        src="/svg/figma-4-stars.svg"
        alt="Star"
        className="top-[28rem] left-16 max-medium:left-16 opacity-90"
        width={128}
        height={128}
        priority
      />
    </div>
  );
}
