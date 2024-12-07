import TextBadge from "../components/badges/TextBadge";
import SecondaryTitle from "../components/texts/SecondaryTitle";
import ExpansionTile from "../components/tiles/ExpansionTile";
import { useIsMobile } from "../constants/mediaQueryConstants";
import AbstractSection from "../components/sections/AbstractSection";
import Link from "next/link";

export default function FaqSection() {

  return (
    <AbstractSection align="items-start">
      <div className="flex flex-col items-start">
        <TextBadge title="FAQ" />
        <SecondaryTitle firstPart="Perguntas e respostas" secondPart={useIsMobile() ? "frequentes sobre nós": "mais frequentes sobre a Asuna"}/>
        <p className="text-base text-gray-700 leading-relaxed max-w-[600px] mt-6">
            Tire suas dúvidas sobre a Asuna descubra como podemos contribuir para o sucesso do seu negócio. Veja a seguir algumas dúvidas frequentes!
        </p>
        <HelpSection/>
      </div>

      <div className="w-full md:w-[47%] mt-8 md:mt-0 md:pl-8 pt-0 xs:pt-12">
        <ExpansionTile
          title="Quais tipos de software a Asuna desenvolve?"
          content="Nós desenvolvemos sistemas sob demanda, incluindo aplicativos mobile, sites, e soluções backend, tudo adaptado às necessidades de empresas de pequeno e médio porte."
        />
        <ExpansionTile
          title="Como funciona o processo de desenvolvimento com a Asuna?"
          content="Trabalhamos em etapas claras: definição de requisitos, design, desenvolvimento, testes e lançamento. Mantemos os clientes sempre informados com atualizações regulares sobre o andamento do projeto."
        />
        <ExpansionTile
          title="Quais são os custos envolvidos no desenvolvimento de um software?"
          content="O custo varia de acordo com a complexidade do projeto, suas funcionalidades e o prazo desejado. Podemos fornecer uma estimativa após uma análise inicial das suas necessidades."
        />
        <ExpansionTile
          title="Quais tecnologias utilizamos para desenvolver o seu projeto?"
          content="Na Asuna, utilizamos Flutter, Kotlin e Swift para desenvolvimento mobile. No backend, trabalhamos com C#, Go e Node.js, garantindo soluções modernas e eficientes."
        />
        <ExpansionTile
          title="Quanto tempo demora para um projeto ficar pronto?"
          content="A duração de um projeto pode variar bastante dependendo da complexidade e dos requisitos específicos de cada cliente. No entanto, nossos clientes costumam obter resultados 35% mais rápidos em comparação com soluções de outras software houses."
        />
      </div>
    </AbstractSection>
  );
}

function HelpSection() {
  return (
    <p className="text-base text-muted-foreground py-4">
    Você tem alguma dúvida que não foi respondida aqui?{" "}
      <Link 
        href="/contato" 
        className="text-primary hover:underline font-medium inline-flex items-center gap-1"
      >
        Entre em contato
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <path d="M15 3h6v6" />
          <path d="M10 14L21 3" />
        </svg>
      </Link>
    </p>
  )
}
