import TextBadge from "../components/badges/TextBadge";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SecondaryTitle from "../components/texts/SecondaryTitle";
import ExpansionTile from "../components/tiles/ExpansionTile";
import { useIsMobile } from "../constants/mediaQueryConstants";
import AbstractSection from "../components/sections/AbstractSection";
import { Phone } from "lucide-react";
import { useRouter } from "next/navigation";

export default function FaqSection() {
  const router = useRouter();

  return (
    <AbstractSection align="items-start">
      <div className="flex flex-col items-start">
        <TextBadge title="FAQ" />
        <SecondaryTitle
          firstPart="Perguntas e respostas"
          secondPart={useIsMobile() ? "frequentes sobre nós": "mais frequentes sobre a Asuna"}
        />
        <p className="text-p1 text-gray-600 text-start mt-4 max-w-[600px] opacity-90">
          Entenda como toda a nossa equipe de especialistas pode ajudar o seu projeto a 
          <span className='font-semibold'> decolar em tempo recorde</span>, com <span className='font-semibold'>soluções ágeis</span> e <span className="font-semibold">escaláveis</span> para o seu negócio.
           Veja a seguir as <span className="font-semibold">perguntas mais comuns que recebemos!</span>
        </p>
        <div className="flex flex-row items-center pt-8 space-x-8 w-full">
          <PrimaryButton title="Tenho uma dúvida" onClick={() => router.push('/contato')} fullWidth={true}
/>
          {/* <div className="flex-row space-x-8 hidden xs:flex">
            <div className="h-14 w-px bg-gray-300"></div>
            <div className="flex flex-col justify-center">
              <p className="text-neutral-600 font-medium text-[16px]">Respondemos em até 2 horas! 🚀</p>
              <p className="text-[14px] text-neutral-600">+100 empresas respondidas pelo nosso time</p> 
            </div>
          </div> */}
        </div>

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
