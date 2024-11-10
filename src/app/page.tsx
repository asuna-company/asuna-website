"use client";

import Image from "next/image";
import TextBadge from "./components/badges/TextBadge";
import PrimaryButton from "./components/buttons/PrimaryButton";
import SecondaryButton from "./components/buttons/SecondaryButton";
import CheckText from "./components/check_text/CheckText";
import ExpansionTile from "./components/expansion_tile";
import Navbar from "./components/navbar/Navbar";
import PrimaryText from "./components/texts/PrimaryTitle";
import SecondaryTitle from "./components/texts/SecondaryTitle";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex flex-col w-full max-w-[1440px] mx-auto px-4 space-y-16">
        <Stars />
        <PrimarySection />
        <SecondarySection />
      </main>

      <div className="pb-16"><ThirdSection /></div>

      <main className="flex flex-col w-full max-w-[1440px] mx-auto px-4 space-y-16">
        <FeedbackSection/>
        <Faq />
      </main>

      
    </div>
  );
}

function Stars() {
  return (
    <div className="relative hidden md:block">
      <Image
        src="/svg/figma-4-stars.svg"
        alt="Star"
        className="absolute top-[28rem] left-16 max-medium:left-16 w-24 h-24 opacity-90"
        width={96}
        height={96}
        priority
      />

      <Image
        src="/svg/figma-4-stars.svg"
        alt="Star"
        className="absolute top-48 right-16 max-medium:right-16 w-24 h-24 opacity-90"
        width={96}
        height={96}
        priority
      />
    </div>
  );
}

function PrimarySection() {
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

function SecondarySection() {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between mt-16 px-4 pl-0 xs:pl-8 pb-32">
      <div className="flex flex-col items-start max-w-[700px]">
        <div className="pb-6"><TextBadge title="Resultados" /></div>
        <SecondaryTitle firstPart="Resultados concretos que" secondPart="transformam a sua empresa" />
        <p className="text-p1 text-gray-600 text-start mt-4 max-w-[550px] opacity-90">
          A <span className="font-semibold">Asuna</span> é uma <span className="font-semibold">software house </span>
          comprometida em criar soluções que geram impacto na rotina da sua empresa. No último ano,
          entregamos projetos que fizeram a diferença para nossos clientes,
          <span className="font-semibold">
            {" "}
            aumentando a eficiência, reduzindo custos e fortalecendo sua
            presença digital
          </span>
          .
        </p>
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
          width={460}
          height={460}
          className="rounded-lg"
        />
      </div>
    </section>
  );
}

function ThirdSection() {
  return (
    <section className="w-full bg-neutral-100 py-12">
      <div className="max-w-[1380px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between">

        <div className="flex flex-col items-start">
          <TextBadge title="Resultados" />
          <div className="max-w-[600px] mx-auto pt-2">
            <SecondaryTitle firstPart="Seja qual for a sua empresa" secondPart="nós temos a solução perfeita" />
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


function FeedbackSection() {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between mt-16 pb-32">
       <div className="px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-start">
          <TextBadge title="Feedbacks" />
          <div className="max-w-[600px] mx-auto pt-2">
            <SecondaryTitle firstPart="Veja o que nossos clientes" secondPart="têm a dizer sobre a Asuna" />

            <p className="text-p1 text-gray-600 text-start mt-4 max-w-[590px] opacity-90 pb-6">
              O <span className="font-semibold">feedback dos nossos clientes</span> é muito importante para nós. É através dessas parcerias que ajustamos o rumo e <span className="font-semibold">garantimos entregas cada vez melhores</span>. Veja a seguir alguns feedbacks!
            </p>
          </div>
        </div>
       </div>

      <TestimonialCard/>
       
    </section>



  )
}

function Faq() {
  return (
    <section className="w-full  py-12">
      <div className="max-w-[1500px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-start pl-0 xs:pl-16">
          <TextBadge title="FAQ" />
          <h2 className="text-h1 font-heading font-bold text-neutral-200 text-start mt-4 pb-2">
            Perguntas e respostas
            <br />
            <span className="text-primary-500">mais frequentes</span>
          </h2>
          <p className="text-p1 text-gray-600 text-start mt-4 max-w-[600px] opacity-90 pb-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. 
          </p>
          <div className="pt-8">
            <PrimaryButton
              title="Tenho uma dúvida"
              onClick={() => alert("Button clicked!")}
            />
          </div>
        </div>


        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
          <ExpansionTile
            title="Lorem Ipsum goes here"
            content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          />
          <ExpansionTile
            title="Lorem Ipsum goes here"
            content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          />
          <ExpansionTile
            title="Lorem Ipsum goes here"
            content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          />
          <ExpansionTile
            title="Lorem Ipsum goes here"
            content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          />
        </div>
      </div>
    </section>
  );
}

const getBackgroundStyle = () => ({
  backgroundImage: "url('svg/lines.svg')",
  backgroundSize: "80rem",
  backgroundPosition: "top -80px left 0",
  backgroundRepeat: "no-repeat",
});



const TestimonialCard = () => {
  return (
    <div className="max-w-xl mx-auto p-6">
      <div className="mb-4">
        <Image
          src="/svg/quote.svg"
          alt="Citação"
          width={35}
          height={35}
          className="text-blue-500"
        />
      </div>

      <div>
        <p className="text-lg text-gray-800">
          O time da <span className="text-blue-600 font-semibold">Asuna</span> trouxe a{" "}
          <span className="text-blue-600 font-semibold">agilidade</span> e{" "}
          <span className="text-blue-600 font-semibold">clareza</span> que faltavam nos nossos projetos.
          Eles entenderam nossas necessidades e entregaram com muita{" "}
          <span className="text-blue-600 font-semibold">precisão</span> e{" "}
          <span className="text-blue-600 font-semibold">rapidez</span>, sem enrolação.
        </p>

  
        <div className="border-t border-gray-300 mt-6"></div>

       
        <div className="mt-4 text-gray-600">
          <span className="font-medium">José Formiga</span> @ Nasajon
        </div>
      </div>
    </div>
  );
};


