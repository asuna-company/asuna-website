export default function RecruitmentBanner() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full justify-center bg-neutral-900">
        <div className="relative w-full overflow-hidden bg-gradient-to-r from-blue-900/30 via-blue-950/30 to-indigo-950/50 px-6 py-16 shadow-2xl">
          <div className="relative mx-auto text-start max-w-[1440px]">
            <h2 className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-4xl">
              Pronto para fazer parte do nosso time?
            </h2>
            <p className="mt-6 max-w-[800px] text-lg leading-8 text-gray-300">
              Junte-se à Asuna e faça parte de uma equipe inovadora. Estamos em busca de talentos apaixonados 
              por tecnologia para criar soluções que transformam o futuro.
            </p>
            <div className="mt-10">
              <a href="https://www.linkedin.com/company/asuna/jobs" target="_blank" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm transition-all hover:bg-gray-100">
                CANDIDATE-SE AGORA
                <span className="ml-2 text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
