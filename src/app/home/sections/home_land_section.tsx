import TextBadge from "@/app/core/components/badges/TextBadge";
import PrimaryButton from "@/app/core/components/buttons/PrimaryButton";
import SecondaryButton from "@/app/core/components/buttons/SecondaryButton";
import PrimaryText from "@/app/core/components/texts/PrimaryTitle";

const getBackgroundStyle = () => ({
  backgroundImage: "url('svg/lines.svg')",
  backgroundSize: "80rem",
  backgroundPosition: "top -80px left 0",
  backgroundRepeat: "no-repeat",
});

export default function HomeLandSection() {
  return (
    <section
      className="flex flex-col items-center justify-center w-full pb-48 pt-24 bg-cover bg-no-repeat bg-center"
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
        Somos uma <span className="font-semibold">software house B2B</span> para
        pequenas e médias empresas, simplificando processos e{" "}
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
          title="Nossos Serviços"
          onClick={() => alert("Button clicked!")}
        />
      </div>
    </section>
  );
}
