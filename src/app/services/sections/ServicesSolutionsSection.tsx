import TextBadge from "@/app/core/components/badges/TextBadge";
import SecondaryTitle from "@/app/core/components/texts/SecondaryTitle";
import { useIsMobile } from "@/app/core/constants/mediaQueryConstants";
import AbstractSection from "@/app/core/sections/AbstractSection";
import { useState } from "react";
import TextBadgeButton from "../components/TextBadgeButton";

const SERVICES = [
  { id: "websites", label: "Websites" },
  { id: "apps", label: "Apps" },
  { id: "uiux", label: "UI/UX Design" },
  { id: "consulting", label: "Consultoria" },
];

export default function ServicesSolutionsSection() {
  const [selectedService, setSelectedService] = useState("websites");

  const renderContent = () => {
    switch (selectedService) {
      case "websites":
        return <p className="text-white">Conteúdo sobre Websites.</p>;
      case "apps":
        return <p className="text-white">Conteúdo sobre Apps.</p>;
      case "uiux":
        return <p className="text-white">Conteúdo sobre UI/UX Design.</p>;
      case "consulting":
        return <p className="text-white">Conteúdo sobre Consultoria.</p>;
      default:
        return null;
    }
  };

  return (
    <AbstractSection bgColor="bg-neutral-800">
      <div className="flex flex-col items-start space-y-6 relative">
        <TextBadge title="Serviços" textColor="text-secondary-400" />
        <SecondaryTitle
          firstPart={"Potencialize o seu negócio"}
          secondPart={"com nossos serviços especializados"}
          firstPartColor="text-white"
          secondPartColor="text-secondary-500"
        />

        <div className="relative w-full mt-4">
          <div
            className="absolute left-0 right-0 -mx-4 px-4 flex flex-nowrap space-x-3 overflow-x-auto scroll-smooth scrollbar-hidden"
            style={{
              width: "100vw",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
            }}
          >
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="flex-shrink-0"
                style={{ minWidth: "fit-content"}}
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

        <div className="mt-6">{renderContent()}</div>
      </div>
    </AbstractSection>
  );
}