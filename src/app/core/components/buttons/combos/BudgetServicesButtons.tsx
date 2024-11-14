import SecondaryButton from "../SecondaryButton";
import PrimaryButton from "../PrimaryButton";

interface BudgetServicesButtonsProps {
  isMobile: boolean;
  hideServicesButton?: boolean;
}

export default function BudgetServicesButtons({isMobile, hideServicesButton = false}: BudgetServicesButtonsProps) {
  return (
     <div className="flex flex-col sm:flex-row space-y-4 xs:space-y-0 space-x-0 xs:space-x-4 mt-8 w-full xs:w-auto">
    <PrimaryButton
      title="Solicite um Orçamento"
      fullWidth={isMobile}
      onClick={() => alert("Button clicked!")}
    />
    {!hideServicesButton && <SecondaryButton
      title="Conheça nossos Serviços"
      fullWidth={isMobile}
      onClick={() => alert("Button clicked!")}
    />}
  </div>
  )
}