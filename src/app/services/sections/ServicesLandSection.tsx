import PrimaryButton from '@/app/core/components/buttons/PrimaryButton';
import PrimaryText from '@/app/core/components/texts/PrimaryTitle';
import AbstractSection from '@/app/core/sections/AbstractSection';
import React from 'react';

export default function ServicesLandSection() {
  return (
    <AbstractSection bgColor="bg-neutral-900" paddingVertical="py-0" dataBg="dark">
      <section className="relative w-full h-screen flex flex-col items-center justify-center bg-neutral-900">
        <EllipseGradient />
        <CircleLines />

        <div className="relative z-10 text-center max-w-[1440px] w-[90%] mx-auto">
           <span className='text-[20px]'>👋</span> <span className=" text-gray-300 text-[18px]">Bem-vindos!</span> 
          {/* <h1 className="text-4xl font-bold text-white mt-4">
            This text is going to be some sort of punchline.
          </h1> */}
          <PrimaryText
            maxWidth={850}
            titleFirstPart="Serviços de Desenvolvimento que elevam o seu negócio"
            isDarkMode={true}
          />
          <p className="text-gray-400 mt-4">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          <PrimaryButton title="Solicite um Orçamento" onClick={() => {}} />
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
      <div className="circle w-[324px] h-[324px] border border-white/10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-circle-rotate"/>
      <div className="circle w-[540px] h-[540px] border border-white/10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-circle-rotate-reverse">
        <div className="dot w-2 h-2 bg-white rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
        <div className="dot w-2 h-2 bg-white rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
      </div>
      <div className="circle w-[756px] h-[756px] border border-white/10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-circle-rotate">
        <div className="dot w-2 h-2 bg-white rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
        <div className="dot w-2 h-2 bg-white rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
      </div>
      <div className="circle w-[972px] h-[972px] border border-white/10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-circle-rotate-reverse">
        <div className="dot w-2 h-2 bg-white rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
        <div className="dot w-2 h-2 bg-white rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
      </div>
    </div>
  );
}