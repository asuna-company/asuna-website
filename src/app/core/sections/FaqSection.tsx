import TextBadge from "../components/badges/TextBadge";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SecondaryTitle from "../components/texts/SecondaryTitle";
import ExpansionTile from "../components/tiles/ExpansionTile";
import { useIsMobile } from "../constants/mediaQueryConstants";
import AbstractSection from "./AbstractSection";

export default function FaqSection() {
  return (
    <AbstractSection align="items-start">
      <div className="flex flex-col items-start">
        <TextBadge title="FAQ" />
        <SecondaryTitle
          firstPart="Perguntas e respostas"
          secondPart="mais frequentes sobre a Asuna"
        />
        <p className="text-p1 text-gray-600 text-start mt-4 max-w-[600px] opacity-90">
          Entenda como nossa equipe especializada pode ajudar seu projeto a 
          <span className='font-semibold'> decolar em tempo recorde</span>, com <span className='font-semibold'>soluções ágeis</span> e <span className="font-semibold">escaláveis</span> para o seu negócio.
           Veja a seguir as <span className="font-semibold">perguntas mais comuns que recebemos!</span>
        </p>
        {!useIsMobile() &&
         <div className="pt-8">
          <PrimaryButton
            title="Tenho uma dúvida"
            onClick={() => alert("Button clicked!")}
          />
        </div>}
      </div>

      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8 pt-0 xs:pt-12">
        <ExpansionTile
          title="Qual valor tenho que investir?"
          content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />
        <ExpansionTile
          title="Lorem Ipsum goes here"
          content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />
        <ExpansionTile
          title="Lorem Ipsum goes here"
          content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />
        <ExpansionTile
          title="Lorem Ipsum goes here"
          content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />
      </div>
    </AbstractSection>
  );
}
