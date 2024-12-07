import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";

interface BudgetServicesButtonsProps {
  hideServicesButton?: boolean;
  isDarkMode?: boolean;
  onClickSecondaryButton: () => void;
}

export default function BudgetServicesButtons({ hideServicesButton = false, onClickSecondaryButton, isDarkMode = false }: BudgetServicesButtonsProps) {
  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4 w-full md:w-auto md:items-center">
      <PrimaryButton
        title="Solicite um Orçamento"
        fullWidth={true}
        onClick={() => alert("Button clicked!")}
      />
      {!hideServicesButton && (
        <SecondaryButton
          title="Conheça nossos Serviços"
          fullWidth={true}
          isDarkMode={isDarkMode}
          onClick={onClickSecondaryButton}
        />
      )}
    </div>
  );
}
