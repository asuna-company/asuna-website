"use client";

import TextBadge from './components/badges/TextBadge';
import PrimaryButton from './components/buttons/PrimaryButton';
import SecondaryButton from './components/buttons/SecondaryButton';
import Navbar from './components/navbar/Navbar';

const getBackgroundStyle = () => ({
  backgroundImage: "url('/lines.svg')",
  backgroundSize: "80%",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",

});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-1 px-4 pb-16 relative bg-cover bg-no-repeat bg-center"
        style={getBackgroundStyle()}>
        <div className="flex space-x-3 mb-4">
          <TextBadge title='Tecnologia e Inovação' />
          <TextBadge title='98% Satisfação' />
        </div>


        <h1 className="font-heading text-h0 font-bold text-gray-800 text-center max-w-[700px] mx-auto">
          Softwares que aceleram <br></br> o futuro do <span className="text-blue-600">seu negócio!</span>
        </h1>

        <p className="text-p1 text-gray-600 text-center mt-4 max-w-[600px] mx-auto opacity-90">
          Somos uma <span className="font-semibold">software house B2B</span> para pequenas e médias empresas,
          simplificando processos e <span className="font-semibold">impulsionando resultados</span> no seu negócio 💙
        </p>

        <div className="flex space-x-4 mt-8">
          <PrimaryButton title='Solicite um Orçamento' onClick={() => alert('Button clicked!')} />
          <SecondaryButton title='Nossos Serviços' onClick={() => alert('Button clicked!')} />
        </div>
      </div>
    </div>
  );
}

