"use client";

import TextBadge from './components/badges/TextBadge';
import PrimaryButton from './components/buttons/PrimaryButton';
import SecondaryButton from './components/buttons/SecondaryButton';
import Navbar from './components/navbar/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex flex-col w-full max-w-[1340px] mx-auto px-4 space-y-16">
        <Stars />
        <PrimarySection />
        <SecondarySection />
      </main>
    </div>
  );
}

function Stars() {
  return (
    <div className="relative">
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
      className="flex flex-col items-center justify-center w-full pb-56 pt-24 bg-cover bg-no-repeat bg-center"
      style={getBackgroundStyle()}
    >
      <div className="flex space-x-3 mb-4">
        <TextBadge title="Tecnologia e Inovação" />
        <TextBadge title="98% Satisfação" />
      </div>

      <h1 className="font-heading text-h0 font-bold text-neutral-200 text-center max-w-[700px] mx-auto pb-4 pt-4">
        Softwares que aceleram <br /> o futuro do <span className="text-primary-500">seu negócio!</span>
      </h1>

      <p className="text-p1 text-gray-600 text-center mt-4 max-w-[600px] mx-auto opacity-90">
        Somos uma <span className="font-semibold">software house B2B</span> para pequenas e médias empresas,
        simplificando processos e <span className="font-semibold">impulsionando resultados</span> no seu negócio 💙
      </p>

      <div className="flex space-x-4 mt-8">
        <PrimaryButton title="Solicite um Orçamento" onClick={() => alert('Button clicked!')} />
        <SecondaryButton title="Nossos Serviços" onClick={() => alert('Button clicked!')} />
      </div>
    </section>
  );
}


function SecondarySection() {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between mt-16 px-4">
      <div className="flex flex-col items-start max-w-[700px]">
        <TextBadge title="Resultados" />
        <h2 className="text-h1 font-heading font-bold text-neutral-200 text-start mt-4">
          Resultados concretos que <span className="text-primary-500">transformam o seu dia a dia</span>
        </h2>
        <p className="text-p1 text-gray-600 text-start mt-4 max-w-[550px] opacity-90">
          A <span className="font-semibold">Asuna</span> é uma software house comprometida em criar soluções que geram impacto.
          No último ano, entregamos projetos que fizeram a diferença para nossos clientes,
          <span className="font-semibold"> aumentando a eficiência, reduzindo custos e fortalecendo sua presença digital</span>.
        </p>
      </div>

      <div className="flex justify-center md:justify-end mt-8 md:mt-0 md:ml-8">
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


const getBackgroundStyle = () => ({
  backgroundImage: "url('svg/lines.svg')",
  backgroundSize: "80rem",
  backgroundPosition: "top -80px left 0",
  backgroundRepeat: "no-repeat",
});

