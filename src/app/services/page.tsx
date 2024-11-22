"use client";

import dynamic from "next/dynamic";
import Navbar from "../core/sections/Navbar";
import ServicesMethodologySection from "./sections/ServicesMethodologySection";
import ServicesLandSection from "./sections/ServicesLandSection";
import { useEffect, useRef } from "react";

const SolutionsSectionDynamic = dynamic(() => import('./sections/ServicesSolutionsSection'), { ssr: false });
const FeedbackSectionDynamic = dynamic(() => import('../core/sections/FeedbackSection'), { ssr: false });
const PostsSectionDynamic = dynamic(() => import('../core/sections/PostsSection'), { ssr: false });
const FaqSectionDynamic = dynamic(() => import('../core/sections/FaqSection'), { ssr: false });
const FooterSectionDynamic = dynamic(() => import('../core/sections/FooterSection'), { ssr: false });


export default function Services() {
  const solutionsRef = useRef<HTMLDivElement>(null);

  const scrollToSolutions = () => {
    if (solutionsRef.current) {
      const elementPosition = solutionsRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - 60, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col max-w-full relative">
      <div className="absolute inset-0"><Navbar isDark={true} /></div>
      <div className="relative overflow-x-hidden space-y-0 xs:space-y-8">
        <ServicesLandSection scrollToSolutions={scrollToSolutions} />        
        <ServicesMethodologySection />
        <div ref={solutionsRef}> <SolutionsSectionDynamic /></div>
        <FeedbackSectionDynamic />
        <PostsSectionDynamic />
        <FaqSectionDynamic />
        <FooterSectionDynamic />
      </div>
    </div>
  );
}


