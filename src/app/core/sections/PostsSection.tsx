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

        <div className="relative w-full mt-4">
          <div
            className="absolute left-0 right-0 -mx-[10%] px-[10%] flex flex-nowrap space-x-3 overflow-x-auto scroll-smooth scrollbar-hidden snap-x snap-mandatory"
            style={{
              width: "120%",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
            }}
          >
            {posts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
        </div>
      </div>
    </AbstractSection>
  );
}
