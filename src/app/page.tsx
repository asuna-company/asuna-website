"use client";

import Image from "next/image";
import Navbar from "./core/components/navbar/Navbar";
import Faq from "./core/sections/faq_section";
import HomeLandSection from "./home/sections/home_land_section";
import HomeResultsSection from "./home/sections/home_results_section";
import HomeServicesSection from "./home/sections/home_services_section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex flex-col w-full max-w-[1440px] mx-auto px-4 space-y-16">
        <Stars />
        <HomeLandSection />
        <HomeResultsSection />
      </main>

      <HomeServicesSection />

      <Faq />
    </div>
  );
}

function Stars() {
  return (
    <div className="relative hidden md:block">
      <Image
        src="/svg/figma-4-stars.svg"
        alt="Star"
        className="absolute top-[28rem] left-16 max-medium:left-16 w-24 h-24 opacity-90"
        width={96}
        height={96}
        priority
      />

      <Image
        src="/svg/figma-4-stars.svg"
        alt="Star"
        className="absolute top-48 right-16 max-medium:right-16 w-24 h-24 opacity-90"
        width={96}
        height={96}
        priority
      />
    </div>
  );
}
