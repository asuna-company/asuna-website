import Image from "next/image";
import posts from "../../../../public/data/posts.json";
import SecondaryTitle from "../components/texts/SecondaryTitle";
import AbstractSection from "./AbstractSection";
import TextBadge from "../components/badges/TextBadge";

export default function PostsSection() {
  return (
    <AbstractSection align="items-start">
      <div>
        <TextBadge title="Blog"/>
        <div className="pt-2">
          <SecondaryTitle firstPart="Publicações recentes" secondPart="no blog especializado da Asuna" />
        </div>

        <h3 className="text-p1 text-gray-600 text-start mt-4 max-w-[590px] opacity-90 pb-2">
          Veja o que nossos especialistas prepararam para você.
          Conteúdos pensados exclusivamente para transformar o seu negócio.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-neutral-900">
          {posts.map((post, index) => (
            <div key={index} className="max-w-[500px] w-full flex flex-col">
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={500}
                height={300}
                unoptimized
                className="rounded-lg"
              />

              <div className="flex justify-between items-center mt-2 px-1">
                <p className="text-p2 text-primary-500">{post.tag}</p> 

                <div className="flex">
                  <div className="flex items-center">
                    <Image
                      src="svg/clock-circle.svg"
                      alt="Clock"
                      width={18}
                      height={18}
                    />
                    <span className="ml-2 text-[13px]">{post.duration}</span>
                  </div>
                  <div className="flex items-center ml-4">
                    <Image
                      src="svg/user.svg"
                      alt="Author Icon"
                      width={18}
                      height={18}
                    />
                    <span className="ml-2 text-[13px]">{post.author}</span>
                  </div>
                </div>
              </div>
                <h2 className="text-p1 font-bold mt-2 transition-colors duration-20 px-1">
                    <a href="" className="hover:text-primary-500 hover:underline">{post.title}</a>
                </h2>
            </div>
          ))}
        </div>
      </div>
    </AbstractSection>
  );
}
