import BudgetServicesButtons from '@/app/core/components/buttons/combos/BudgetServicesButtons';
import PrimaryText from '@/app/core/components/texts/PrimaryTitle';
import AbstractSection from '@/app/core/sections/AbstractSection';
import { useIsMobile } from '@/app/core/constants/mediaQueryConstants';
import React from 'react';

export default function ServicesLandSection({ scrollToSolutions }: { scrollToSolutions: () => void }) {
  const textAlign = useIsMobile() ? 'text-left' : 'text-center';

  return (
    <AbstractSection bgColor="bg-neutral-900" paddingVertical="py-0" dataBg="dark">
      <section className="relative w-full h-screen flex flex-col items-center justify-center bg-neutral-900">
        <EllipseGradient />
        <CircleLines />

        <div className="relative z-10 text-center pb-12 xs:pb-16 flex flex-col items-center">
          <div className={`flex items-center space-x-2 pb-2 ${useIsMobile() ? 'text-left w-full' : 'justify-center'}`}>
            <span className="text-[20px]">👋</span>
            <span className="text-gray-300 text-[18px]">Bem-vindos!</span>
          </div>


          <PrimaryText
            maxWidth={900}
            titleFirstPart="Serviços de software que irão elevar toda a sua operação!"
            isDarkMode={true}
          />

          <h2 className={`text-p1 text-gray-300 ${textAlign} mt-1 xs:mt-0 max-w-[600px] mx-auto opacity-90 font-inter`}>
            A Asuna é sua parceira em serviços de software que elevam seu negócio,
            viemos para simplificar processos e trazer as melhores soluções do mercado.
          </h2>

          <BudgetServicesButtons
              isMobile={useIsMobile()}
              onClickSecondaryButton={scrollToSolutions}
              isDarkMode={true}
          />
        </div>
      </section>
    </AbstractSection>
  );
}

function EllipseGradient() {
  return (
    <div
      className="absolute top-0 left-1/2 transform -translate-x-1/2 blur-3xl opacity-50"
      style={{
        background: 'radial-gradient(circle, #3649FF, #8958FE)',
        width: '1100px',
        height: '1200px',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)',
        opacity: 0.25,
      }}
    ></div>
  );
}

function CircleLines() {
  return (
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 pointer-events-none">
      <div className="circle w-[324px] h-[324px] border border-white/10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-circle-rotate" >
          <div className="dot w-2 h-2 bg-white rounded-full absolute  top-[-4.5px] left-1/2 transform -translate-x-1/2"></div>
          <div className="dot w-2 h-2 bg-white rounded-full absolute bottom-[-4.5px] left-1/2 transform -translate-x-1/2"></div>
      </div>      
      <div className="circle w-[540px] h-[540px] border border-white/10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-circle-rotate-reverse">
        <div className="dot w-2 h-2 bg-white rounded-full absolute  top-[-4.5px] left-1/2 transform -translate-x-1/2"></div>
        <div className="dot w-2 h-2 bg-white rounded-full absolute bottom-[-4.5px] left-1/2 transform -translate-x-1/2"></div>
      </div>
      <div className="circle w-[756px] h-[756px] border border-white/10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-circle-rotate">
        <div className="dot w-2 h-2 bg-white rounded-full absolute top-[-4.5px] left-1/2 transform -translate-x-1/2"></div>
      </div>
      <div className="circle w-[972px] h-[972px] border border-white/10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-circle-rotate-reverse">
        <div className="dot w-2 h-2 bg-white rounded-full absolute top-[-4.5px] left-1/2 transform -translate-x-1/2"></div>
        <div className="dot w-2 h-2 bg-white rounded-full absolute bottom-[-4.5px] left-1/2 transform -translate-x-1/2"></div>
      </div>
    </div>
  );
}
