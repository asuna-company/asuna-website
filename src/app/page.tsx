"use client";

import dynamic from "next/dynamic";
import HomeLandSection from "./home/sections/HomeLandSection";
import HomeResultsSection from "./home/sections/HomeResultsSection";

const ServicesSectionDynamic = dynamic(() => import('./home/sections/HomeServicesSection'), { ssr: false });
const FeedbackSectionDynamic = dynamic(() => import('./shared/sections/FeedbackSection'), { ssr: false });
const PostsSectionDynamic = dynamic(() => import('./shared/sections/PostsSection'), { ssr: false });
const FaqSectionDynamic = dynamic(() => import('./shared/sections/FaqSection'), { ssr: false });
const FooterSectionDynamic = dynamic(() => import('./shared/sections/FooterSection'), { ssr: false });



const Navbar = dynamic(() => import('./shared/sections/Navbar'), { ssr: true });


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col max-w-full">
      <Navbar isDark={false}  />
      <div className="space-y-0 xs:space-y-20 overflow-x-hidden">
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
