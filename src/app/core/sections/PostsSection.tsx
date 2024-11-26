import Image from "next/image";
import posts from "../../../../public/data/posts.json";
import SecondaryTitle from "../components/texts/SecondaryTitle";
import TextBadge from "../components/badges/TextBadge";
import { useIsMobile } from "../constants/mediaQueryConstants";
import { useState } from "react";

interface BlogPost {
  author: string;
  duration: string;
  imageUrl: string;
  tag: string;
  title: string;
}


export default function PostsSection() {
  const isMobile = useIsMobile();

  return (
    <div>
      <section className="w-full overflow-hidden">
        <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between" style={{ maxWidth: "1440px" }}>
          <div className="flex flex-col items-start">
            <TextBadge title="Blog" />
            <div className="max-w-[900px] mx-auto pt-2 items-start justify-start">
              <SecondaryTitle
                firstPart="Publicações Recentes"
                secondPart={isMobile ? "no blog da Asuna" : "no blog de especialistas da Asuna"}
              />
              <h3 className="text-p1 text-gray-600 text-start mt-4 opacity-90 pb-2">
                Veja o que nossos especialistas fizeram para vocês. Conteúdos exclusivos para o seu negócio e dia a dia.
              </h3>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full xs:w-[90%] pl-4 xs:pl-0 mt-4 xs:mt-6 mx-auto flex flex-col md:flex-row justify-between" style={{ maxWidth: "1440px" }}>
        <div
          id="postsContainer"
          className="flex flex-row gap-6 md:grid md:grid-cols-3 overflow-x-auto snap-x snap-mandatory pb-4 pr-6"
        >
          {posts.map((post, index) => BlogCard(post, index))}
        </div>
      </div>
    </div>
  );
}

function BlogCard(post: BlogPost, index: number) {
  return (
    <div
      key={index}
      className="flex-shrink-0 sm:max-w-[80%] md:max-w-[500px] max-w-[95%] flex flex-col snap-start"
    >
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={500}
        height={300}
        unoptimized
        className="rounded-lg"
      />

      <div className="flex justify-between items-center mt-2 px-1">
        <p className="text-p2 text-primary-500 text-[12.5px] xs:text-[14px]">{post.tag}</p>

        <div className="flex">
          <div className="flex items-center">
            <Image src="svg/clock-circle.svg" alt="Clock" width={18} height={18} />
            <span className="ml-2 text-[13px]">{post.duration}</span>
          </div>
          <div className="flex items-center ml-4">
            <Image src="svg/user.svg" alt="Author Icon" width={18} height={18} />
            <span className="ml-2 text-[13px]">{post.author}</span>
          </div>
        </div>
      </div>
      <h2 className="font-semibold mt-2 transition-colors duration-20 px-1 line-clamp-2">
        <a href="" className="hover:text-primary-500 hover:underline">
          {post.title}
        </a>
      </h2>
    </div>
  );
}
