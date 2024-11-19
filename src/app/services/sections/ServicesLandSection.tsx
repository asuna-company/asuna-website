import PrimaryButton from '@/app/core/components/buttons/PrimaryButton';
import AbstractSection from '@/app/core/sections/AbstractSection';

import React from 'react';

export default function ServicesLandSection() {
  return (
    <AbstractSection bgColor="bg-neutral-900" paddingVertical="py-0" dataBg='dark'>

      <section className="relative w-full h-screen flex flex-col items-center justify-center bg-neutral-900">
        <EllipseGradient />
        <div className="relative z-10 text-center max-w-[1440px] w-[90%] mx-auto">
          <span className="text-sm text-gray-300">👋 Bem-vindos!</span>
          <h1 className="text-4xl font-bold text-white mt-4">
            This text is going to be some sort of punchline.
          </h1>
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
        width: '900px',
        height: '1000px',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: 0.27,
      }}
    ></div>
  );
}
