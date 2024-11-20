"use client";

import dynamic from "next/dynamic";
import HomeLandSection from "./home/sections/HomeLandSection";
import HomeResultsSection from "./home/sections/HomeResultsSection";
import Navbar from "./core/sections/navbar/Navbar";
import useMobile from "./core/hooks/useMobile";


const ServicesSectionDynamic = dynamic(() => import('./home/sections/HomeServicesSection'), { ssr: false });
const FeedbackSectionDynamic = dynamic(() => import('./core/sections/FeedbackSection'), { ssr: false });
const PostsSectionDynamic = dynamic(() => import('./core/sections/PostsSection'), { ssr: false });
const FaqSectionDynamic = dynamic(() => import('./core/sections/FaqSection'), { ssr: false });
const FooterSectionDynamic = dynamic(() => import('./core/sections/FooterSection'), { ssr: false });

export default function Home() {
  const isMobile = useMobile();

  if (isMobile === null) {
    return (
      <div className="shimmer h-screen w-screen bg-gray-200 p-4 flex flex-col space-y-4">
        <div className="bg-gray-300 h-12 w-3/4 rounded-md"></div>
        <div className="bg-gray-300 h-8 w-1/2 rounded-md"></div>
        <div className="bg-gray-300 h-48 w-full rounded-md"></div>
        <div className="bg-gray-300 h-12 w-3/4 rounded-md"></div>
        <div className="bg-gray-300 h-8 w-1/2 rounded-md"></div>
        <div className="bg-gray-300 h-48 w-full rounded-md"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col max-w-full">
      <Navbar isMobile={isMobile} startDarkSectionFlag={false} />
      <div className="space-y-0 xs:space-y-24 overflow-x-hidden">
        <HomeLandSection />
        <div className="pt-0 xs:pt-8"><HomeResultsSection /></div>
        <ServicesSectionDynamic />
        <FeedbackSectionDynamic />
        <PostsSectionDynamic />
        <FaqSectionDynamic />
        <FooterSectionDynamic />
      </div>
    </div>
  );
}
