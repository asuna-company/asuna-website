import TextBadge from "../components/badges/TextBadge";
import PrimaryButton from "../components/buttons/PrimaryButton";
import ExpansionTile from "../components/tiles/expansion_tile";

export default function Faq() {
  return (
    <section className="w-full  py-12">
      <div className="max-w-[1500px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-start pl-0 xs:pl-16">
          <TextBadge title="FAQ" />
          <h2 className="text-h1 font-heading font-bold text-neutral-200 text-start mt-4 pb-2">
            Perguntas e respostas
            <br />
            <span className="text-primary-500">mais frequentes</span>
          </h2>
          <p className="text-p1 text-gray-600 text-start mt-4 max-w-[600px] opacity-90 pb-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. 
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
      </div>
    </section>
  );
}
