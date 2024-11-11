import TextBadge from "@/app/core/components/badges/TextBadge";
import CheckText from "@/app/core/components/check_text/CheckText";
import SecondaryTitle from "@/app/core/components/texts/SecondaryTitle";
import Image from "next/image";

export default function HomeServicesSection() {
  return (
    <section className="w-full bg-neutral-100 py-12">
      <div className="max-w-[1380px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-start">
          <TextBadge title="Resultados" />
          <div className="max-w-[600px] mx-auto pt-2">
            <SecondaryTitle
              firstPart="Seja qual for a sua empresa"
              secondPart="nós temos a solução perfeita"
            />
          </div>

          <p className="text-p1 text-gray-600 text-start mt-4 max-w-[620px] opacity-90 pb-6">
            a <span className="font-semibold">Asuna</span> pode ajudar a
            desenvolver produtos de alto impacto para a sua empresa. Nós
            oferecemos um serviço especializado que potencializa sua marca por
            meio de{" "}
            <span className="font-semibold">
              aplicativos, sites, consultoria e UI/UX.
            </span>
          </p>

          <div className="grid grid-cols-2 gap-6 w-full mt-4 items-start justify-start">
            <CheckText title="Desenvolvimento Mobile" />
            <CheckText title="Integração de IA" />
            <CheckText title="Desenvolvimento Web" />
            <CheckText title="Soluções diretas para SaaS" />
            <CheckText title="UI/UX Design" />
            <CheckText title="Consultoria de Software" />
          </div>
        </div>

        <div className="flex justify-center md:justify-center mt-8 md:mt-0 w-full md:w-auto pt-16 pl-0 xs:pl-32">
          <Image
            src="/svg/details_section.svg"
            alt="Etapas de Desenvolvimento da Asuna"
            width={640}
            height={380}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
