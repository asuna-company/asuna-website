import TextBadge from "@/app/shared/components/badges/TextBadge";
import AbstractSection from "@/app/shared/components/sections/AbstractSection";
import SecondaryTitle from "@/app/shared/components/texts/SecondaryTitle";
import TextBadgeButton from "../components/TextBadgeButton";

import { useState } from "react";
import AppsSolutionsInternalSection from "./internals/AppsSolutionsInternalSection";
import ConsultingSolutionsInternalSection from "./internals/ConsultingSolutionsInternalSection";
import DesignSolutionsInternalSection from "./internals/DesignSolutionsInternalSection";
import WebsitesSolutionsInternalSection from "./internals/WebsitesSolutionsInternalSection";

const SERVICES = [
  { id: "websites", label: "Websites" },
  { id: "apps", label: "Apps" },
  { id: "uiux", label: "UI/UX Design" },
  { id: "consulting", label: "Consultoria" },
];

const getBackgroundStyle = () => ({
  backgroundImage: "url('svg/lines.svg')",
  backgroundSize: "120rem",
  backgroundPosition: "top -80px left 0",
  backgroundRepeat: "no-repeat",
  opacity: 0.2,
});


export default function ServicesSolutionsSection() {
  const [selectedService, setSelectedService] = useState("websites");

  const renderContent = () => {
    switch (selectedService) {
      case "websites":
        return <WebsitesSolutionsInternalSection />;
      case "apps":
        return <AppsSolutionsInternalSection />;
      case "uiux":
        return <DesignSolutionsInternalSection />;
      case "consulting":
        return <ConsultingSolutionsInternalSection />;
      default:
        return null;
    }
  };

  return (
    <div className="relative">
      <AbstractSection bgColor="bg-neutral-800">
          <div className="absolute inset-0 z-0" style={getBackgroundStyle()}/>

            <div className="relative flex flex-col items-start space-y-6">
              <TextBadge title="Serviços" textColor="text-secondary-400" />
              <SecondaryTitle
                firstPart={"Potencialize o seu negócio"}
                secondPart={"com nossos serviços especializados"}
                firstPartColor="text-white"
                secondPartColor="text-secondary-500"
              />

              <div className="relative w-full mt-4">
                <div
                  className="absolute left-0 right-0 -mx-[10%] px-[10%] flex flex-nowrap space-x-3 overflow-x-auto scroll-smooth scrollbar-hidden"
                  style={{
                    width: "120%",
                    WebkitOverflowScrolling: "touch",
                    scrollbarWidth: "none",
                  }}
                >
                  {SERVICES.map((service) => (
                    <div
                      key={service.id}
                      className="flex-shrink-0"
                      style={{ minWidth: "fit-content" }}
                    >
                      <TextBadgeButton
                        title={service.label}
                        isSelected={selectedService === service.id}
                        onClick={() => setSelectedService(service.id)}
                        textColor="text-secondary-400"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-16 px-1 w-full flex-1">{renderContent()}</div>
            </div>
        </AbstractSection>
    </div>
  );
}
