"use client";

import Navbar from "./core/components/navbar/Navbar";
import FaqSection from "./core/sections/faq_section";
import FeedbackSection from "./home/sections/home_feedback_section";
import HomeLandSection from "./home/sections/home_land_section";
import HomeResultsSection from "./home/sections/home_results_section";
import HomeServicesSection from "./home/sections/home_services_section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pb-16">
        <HomeLandSection />
        <HomeResultsSection />
        <HomeServicesSection />
        <FeedbackSection />
        <FaqSection />
      </div>
    </div>
  );
}
