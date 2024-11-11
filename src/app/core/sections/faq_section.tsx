import TextBadge from "../components/badges/TextBadge";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SecondaryTitle from "../components/texts/SecondaryTitle";
import ExpansionTile from "../components/tiles/expansion_tile";
import AbstractSection from "./abstract_section";

export default function Faq() {
  return (
    <AbstractSection>
      <div className="flex flex-col items-start">
        <TextBadge title="FAQ" />
        <div className="max-w-[600px] mx-auto mt-4 pb-2">
          <SecondaryTitle
            firstPart="Perguntas e respostas"
            secondPart="mais frequentes"
          />
        </div>
        <p className="text-p1 text-gray-600 text-start mt-4 max-w-[600px] opacity-90 pb-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. 
        </p>
        <div className="pt-8">
          <PrimaryButton
            title="Tenho uma dúvida"
            onClick={() => alert("Button clicked!")}
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
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
        <ExpansionTile
          title="Lorem Ipsum goes here"
          content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />
      </div>
    </AbstractSection>
  );
}
