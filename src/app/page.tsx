"use client";

import Navbar from './components/navbar/Navbar';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Conteúdo Principal */}
      <div className="flex flex-col items-center justify-center flex-1 px-4">
        {/* Estrelas decorativas */}
        {/* <div className="absolute top-10 left-10">
          <Image src="/star.svg" alt="Star" width={50} height={50} />
        </div>
        <div className="absolute top-10 right-10">
          <Image src="/star.svg" alt="Star" width={50} height={50} />
        </div> */}

        {/* Badges */}
        <div className="flex space-x-4 mb-4">
          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full">Tecnologia e Propósito</span>
          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full">98% Satisfação</span>
        </div>

        {/* Título */}
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
