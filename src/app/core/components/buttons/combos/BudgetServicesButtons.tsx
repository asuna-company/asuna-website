import { useIsMobile } from "@/app/core/constants/mediaQueryConstants";
import SecondaryButton from "../SecondaryButton";
import PrimaryButton from "../PrimaryButton";

interface BudgetServicesButtonsProps {
  hideServicesButton?: boolean;
}


export default function BudgetServicesButtons({hideServicesButton = false}: BudgetServicesButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row space-y-4 xs:space-y-0 space-x-0 xs:space-x-4 mt-8 w-full xs:w-auto">
      <PrimaryButton
        title="Solicite um Orçamento"
        fullWidth={useIsMobile()}
        onClick={() => alert("Button clicked!")}
      />
      {!hideServicesButton && <SecondaryButton
        title="Conheça nossos Serviços"
        fullWidth={hideServicesButton}
        onClick={() => alert("Button clicked!")}
      />}
    </div>
  )
}