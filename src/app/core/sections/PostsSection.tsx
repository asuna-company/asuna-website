import posts from "../../../../public/data/posts.json";
import TextBadge from "../components/badges/TextBadge";
import BlogCard from "../components/cards/BlogCard";
import AbstractSection from "../components/sections/AbstractSection";
import SecondaryTitle from "../components/texts/SecondaryTitle";
import { useIsMobile } from "../constants/mediaQueryConstants";

export type Post = {
  slug: string;
  title: string;
  author: string;
  readingTime: string;
  tag: string;
  imageUrl: string;
};

export default function PostsSection() {
  const isMobile = useIsMobile();

  return (
    <AbstractSection>
      <div className="flex flex-col items-start space-y-6 relative">
        <div className="flex flex-col items-start">
          <TextBadge title="Blog" />
          <div className="max-w-[900px] mx-auto pt-2 items-start justify-start">
            <SecondaryTitle
              firstPart="Publicações Recentes"
              secondPart={
                isMobile
                  ? "no blog da Asuna"
                  : "no blog de especialistas da Asuna"
              }
            />
            <h3 className="text-p1 text-gray-600 text-start mt-4 opacity-90 pb-2">
              Veja o que nossos especialistas fizeram para vocês. Conteúdos
              exclusivos para o seu negócio e dia a dia.
            </h3>
          </div>
        </div>

        <div
          className="w-full xs:w-[90%] pl-4 xs:pl-0 mt-4 xs:mt-6 mx-auto flex flex-col md:flex-row justify-between"
          style={{ maxWidth: "1440px" }}
        >
          <div className="flex flex-row gap-6 md:grid md:grid-cols-3 overflow-x-auto snap-x snap-mandatory pb-4 pr-6">
            {posts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
        </div>
      </div>
    </AbstractSection>
  );
}
