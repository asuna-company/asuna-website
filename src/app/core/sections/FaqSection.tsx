import TextBadge from "../components/badges/TextBadge";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SecondaryTitle from "../components/texts/SecondaryTitle";
import ExpansionTile from "../components/tiles/ExpansionTile";
import { useIsMobile } from "../constants/mediaQueryConstants";
import AbstractSection from "../components/sections/AbstractSection";

export default function FaqSection() {
  return (
    <AbstractSection align="items-start">
      <div className="flex flex-col items-start">
        <TextBadge title="FAQ" />
        <SecondaryTitle
          firstPart="Perguntas e respostas"
          secondPart="mais frequentes sobre a Asuna"
        />
        <p className="text-p1 text-gray-600 text-start mt-4 max-w-[600px] opacity-90">
          Entenda como nossa equipe especializada pode ajudar seu projeto a 
          <span className='font-semibold'> decolar em tempo recorde</span>, com <span className='font-semibold'>soluções ágeis</span> e <span className="font-semibold">escaláveis</span> para o seu negócio.
           Veja a seguir as <span className="font-semibold">perguntas mais comuns que recebemos!</span>
        </p>
        {!useIsMobile() &&
         <div className="pt-8">
          <PrimaryButton
            title="Tenho uma dúvida"
            onClick={() => alert("Button clicked!")}
          />
        </div>}
      </div>

      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8 pt-0 xs:pt-12">
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
      </div>
    </AbstractSection>
  );
}
