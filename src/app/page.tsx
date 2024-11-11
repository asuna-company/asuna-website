"use client";

import Navbar from "./core/components/navbar/Navbar";
import FaqSection from "./core/sections/FaqSection";
import FeedbackSection from "./home/sections/HomeFeedbackSection";
import HomeLandSection from "./home/sections/HomeLandSection";
import HomeResultsSection from "./home/sections/HomeResultsSection";
import HomeServicesSection from "./home/sections/HomeServicesSection";

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
