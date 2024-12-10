import BudgetServicesButtons from '@/app/shared/components/buttons/combos/BudgetServicesButtons';
import PrimaryText from '@/app/shared/components/texts/PrimaryTitle';
import { useIsMediumLarge, useIsMobile } from '@/app/shared/constants/mediaQueryConstants';
import React from 'react';
import EmojiBadge from '../components/EmojiBadge';
import AbstractSection from '@/app/shared/components/sections/AbstractSection';
import TextBadge from '@/app/shared/components/badges/TextBadge';


export default function ServicesLandSection({ scrollToSolutions }: { scrollToSolutions: () => void }) {
  const isMobile = useIsMobile();
  const isMediumLarge = useIsMediumLarge();

  const titleFirstPart =isMobile ? 'Serviços que irão revolucionar': 'Serviços que irão revolucionar'
  const titleSecondPart = isMobile ? 'toda a operação de vez!' : 'toda a sua operação de vez!'

  const desktopSubtitle = 'A Asuna é uma software house especializada em serviços digitais que impulsionam o crescimento do seu negócio. Nossa missão é simplificar processos e entregar soluções sob medida, combinando tecnologia de ponta com agilidade e eficiência.'
  const mobileSubtitle = ' A Asuna é uma software house especializada em serviços digitais que impulsionam o crescimento do seu negócio. Nossa missão é simplificar processos e entregar soluções sob medida.'
  const subtitle = isMobile ? mobileSubtitle : desktopSubtitle

  const verticalPadding = isMobile ? 'py-8' : isMediumLarge ? 'py-24' : 'py-0'

  return (
    <AbstractSection bgColor="bg-neutral-700"  dataBg="dark" paddingVertical={verticalPadding}> 
      <section className="w-full min-h-fit medium-small:h-screen flex flex-col items-start justify-center bg-neutral-700">
        <EllipseGradient />
        <CircleLines />

        <div className="relative z-10 flex pt-16 xs:pt-0 flex-col items-start">
          <div className='pb-4'>
            <div className='pb-4 space-x-2 flex'>
              <TextBadge title="Impulsionamos negócios" textColor="text-secondary-400" />
              <div className='hidden xs:flex'><TextBadge title="Serviços digitais" textColor="text-secondary-400" /></div>
            </div>

            <PrimaryText maxWidth={isMobile ? 600 : 900} titleFirstPart={titleFirstPart} titleSecondPart={titleSecondPart} isDarkMode={true} alignLeft={true}/>
          </div>

          <h2 className={`text-p1 text-gray-300 text-left mb-8 mt-1 xs:mt-0 max-w-[700px] opacity-90 font-inter`}> {subtitle} </h2>
          <div className=' pb-12 xs:pb-0 flex w-full'><BudgetServicesButtons onClickSecondaryButton={scrollToSolutions} isDarkMode={true}/></div>
        </div>
      </section>

      <div className='hidden medium-small:block'><RightBadges/></div>
    </AbstractSection>
  );
} 

function RightBadges() {
  return (
    <div className="flex flex-col items-start space-y-28 w-fit">
      <div className="pl-8 animate-float-small">
        <EmojiBadge emoji="🎨" title="UI/UX Design" />
      </div>
      <div className="pl-40 animate-float-extra-large">
        <EmojiBadge emoji="📱" title="Desenvolvimento Mobile" />
      </div>
      <div className="pl-32 animate-float-large">
        <EmojiBadge emoji="💻" title="Desenvolvimento Web" />
      </div>
      <div className="animate-float-medium">
        <EmojiBadge emoji="🎉" title="Consultoria de Software" />
      </div>
    </div>
  );
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
