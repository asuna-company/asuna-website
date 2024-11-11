"use client";

import Navbar from "./core/components/navbar/Navbar";
import Faq from "./core/sections/faq_section";
import FeedbackSection from "./home/sections/home_feedback_section";
import HomeLandSection from "./home/sections/home_land_section";
import HomeResultsSection from "./home/sections/home_results_section";
import HomeServicesSection from "./home/sections/home_services_section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* <main className="flex flex-col w-full max-w-[1440px] mx-auto px-4 space-y-16"></main> */}

      <div className="pb-16">
        <HomeLandSection />
        <HomeResultsSection />
        <HomeServicesSection />
        <FeedbackSection />
        <Faq />
      </div>
    </div>
  );
}
