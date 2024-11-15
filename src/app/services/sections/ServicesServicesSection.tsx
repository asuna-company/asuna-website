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

export default function ServicesServicesSection() {
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
    <AbstractSection bgColor="bg-neutral-900">
      <div className="flex flex-col items-start space-y-6">
        <div className="space-x-2">
          <TextBadge title="Serviços" />
          <TextBadge title="Mais Procurados" />
        </div>

        <SecondaryTitle
          firstPart={`${
            useIsMobile()
              ? "Potencialize o seu negócio"
              : "Potencialize o seu negócio"
          }`}
          firstPartColor="text-white"
          secondPart={`${
            useIsMobile()
              ? "com nossos serviços especializados"
              : "com nossos serviços especializados"
          }`}
        />

        <div className="flex space-x-4">
          {SERVICES.map((service) => (
            <TextBadgeButton
              title={service.label}
              key={service.id}
              isSelected={selectedService === service.id}
              onClick={() => setSelectedService(service.id)}
            />
          ))}
        </div>

        {/* Dynamic Content */}
        <div className="mt-6">{renderContent()}</div>
      </div>
    </AbstractSection>
  );
}
