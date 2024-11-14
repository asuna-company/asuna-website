import Image from "next/image";
import posts from "../../../../public/data/posts.json";
import TextBadge from "../components/badges/TextBadge";
import SecondaryTitle from "../components/texts/SecondaryTitle";
import AbstractSection from "./AbstractSection";

export default function PostsSection() {
  return (
    <AbstractSection align="items-start">
      <div>
        <TextBadge title="Blog" />
        <div className="pt-2">
          <SecondaryTitle firstPart="Publicações Recentes" secondPart="" />
        </div>

        <p className="text-p1 text-gray-600 text-start mt-4 max-w-[590px] opacity-90 pb-2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. 
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-neutral-900">
          {posts.map((post, index) => (
            <div key={index} className="max-w-[500px] w-full  flex flex-col">
              {" "}
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={500}
                height={300}
                unoptimized
                className="rounded-lg"
              />
              <div className="text-p3 mt-2 flex">
                <div className="text-p3 flex">
                  <Image
                    src="svg/clock-circle.svg"
                    alt="Clock"
                    width={18}
                    height={18}
                  />
                  <span className="ml-2">{post.duration} min read</span>
                </div>
                <div className="text-p3 flex ml-4">
                  <Image
                    src="svg/user.svg"
                    alt="Author Icon"
                    width={18}
                    height={18}
                  />
                  <span className="ml-2 ">{post.author} </span>
                </div>
              </div>
              <h2 className="text-p1 font-bold mt-2">{post.title}</h2>
              <div className="text-p3 flex items-center mt-auto">
                <span className="mr-2">Learn More</span>
                <Image
                  src="svg/diagonal-top-right-arrow.svg"
                  alt="Diagonal Link Arrow"
                  width={18}
                  height={18}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </AbstractSection>
  );
}
