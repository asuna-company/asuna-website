import BudgetServicesButtons from '@/app/core/components/buttons/combos/BudgetServicesButtons';
import PrimaryText from '@/app/core/components/texts/PrimaryTitle';
import { useIsMobile } from '@/app/core/constants/mediaQueryConstants';
import React from 'react';
import EmojiBadge from '../components/EmojiBadge';
import AbstractSection from '@/app/core/components/sections/AbstractSection';

export default function ServicesLandSection({ scrollToSolutions }: { scrollToSolutions: () => void }) {
  const textAlign = useIsMobile() ? 'text-left' : 'text-center';

  return (
    <AbstractSection bgColor="bg-neutral-700" paddingVertical="pt-24 xs:py-0" dataBg="dark" maxWidth='1650px'> 
      <div className='hidden xs:block'><LeftBadges/></div>

      <section className="relative w-full min-h-full pb-0 xs:pb-8 xs:h-screen flex flex-col items-center justify-center bg-neutral-700">
        <EllipseGradient />
        <CircleLines />

        <div className="relative z-10 text-center pr-4 pb-12 xs:pb-24 flex flex-col items-center">
          <div className={`flex items-center space-x-2 pb-2 ${useIsMobile() ? 'text-left w-full' : 'justify-center'}`}>
            <span className="text-[20px]">👋</span>
            <span className="text-gray-300 text-[18px]">Bem-vindos!</span>
          </div>

          <PrimaryText
            maxWidth={900}
            titleFirstPart="Serviços de software que irão elevar toda a sua operação!"
            isDarkMode={true}
            alignLeft={true}
          />

          <h2 className={`text-p1 text-gray-300 ${textAlign} mb-2 mt-1 xs:mt-0 max-w-[600px] mx-auto opacity-90 font-inter`}>
            A Asuna é sua parceira em serviços de software que elevam seu negócio,
            viemos para simplificar processos e trazer as melhores soluções do mercado.
          </h2>

          <BudgetServicesButtons onClickSecondaryButton={scrollToSolutions} isDarkMode={true}/>
        </div>
      </section>

      <div className='hidden xs:block'><RightBadges/></div>

    </AbstractSection>
  );
} 

function LeftBadges() {
  return (
    <div className="flex flex-col items-start space-y-60 w-fit">
      <div className="pl-44 animate-bounce-slow">
        <EmojiBadge emoji="🎨" title="UI/UX Design" />
      </div>
      <div className="animate-float">
        <EmojiBadge emoji="📱" title="Desenvolvimento Mobile" />
      </div>
      <div className="pl-44 animate-bounce-slow">
        <EmojiBadge emoji="🌐" title="Desenvolvimento Web" />
      </div>
    </div>
  )
}

function RightBadges() {
  return (
    <div className="flex flex-col items-start space-y-60 w-fit">
      <div className="animate-bounce-slow">
        <EmojiBadge emoji="🤖" title="Integração com IA" />
      </div>
      <div className="pl-44 animate-float">
        <EmojiBadge emoji="🚀" title="Soluções para SaaS" />
      </div>
      <div className="animate-bounce-slow">
        <EmojiBadge emoji="🎉" title="Consultoria de Software" />
      </div>
    </div>
  )
}

function EllipseGradient() {
  const isMobile = useIsMobile()

  return (
    <div
      className="absolute top-0 left-1/2 transform -translate-x-1/2 blur-3xl opacity-50"
      style={{
        background: 'radial-gradient(circle, #3649FF, #8958FE)',
        width: isMobile ? '600px': '1100px',
        height: isMobile ? '600px': '1100px',
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
