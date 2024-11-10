"use client";

import Navbar from './components/navbar/Navbar';
import TextBadge from './components/badges/TextBadge';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-1 px-4">
        <div className="flex space-x-3 mb-4">
          <TextBadge title='Tecnologia e Inovação' />
          <TextBadge title='98% Satisfação' />
        </div>


        <h1 className="text-4xl font-bold text-gray-800 text-center">
          Softwares que aceleram o futuro do <span className="text-blue-600">seu negócio!</span>
        </h1>

        {/* Descrição */}
        <p className="text-lg text-gray-600 text-center mt-4">
          Somos uma <span className="font-semibold">software house B2B</span> para pequenas e médias empresas,
          simplificando processos e <span className="font-semibold">impulsionando resultados</span> no seu negócio 💙
        </p>

        {/* Botões */}
        <div className="flex space-x-4 mt-8">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
            Solicite um Orçamento
          </button>
          <button className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg  hover:bg-gray-100">
            Nossos Serviços
          </button>
        </div>
      </div>
    </div>
  );
}
