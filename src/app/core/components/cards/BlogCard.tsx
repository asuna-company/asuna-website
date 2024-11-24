import { Post } from "@/app/blog/infrastructure/types/PostType";
import Image from 'next/image'

export default function BlogCard({post}: {post: Post}) {
  return (
    <div className="flex-shrink-0 sm:max-w-[80%] md:max-w-[500px] max-w-[95%] flex flex-col snap-start">
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={500}
        height={300}
        className="rounded-lg"
      />

      <div className="flex justify-between items-center mt-2 px-1">
        <p className="text-p2 text-primary-500 text-[12.5px] xs:text-[14px]">{post.tag}</p>

        <div className="flex">
          <div className="flex items-center">
            <Image src="svg/clock-circle.svg" alt="Clock" width={18} height={18} />
            <span className="ml-2 text-[13px]">{post.readingTime}</span>
          </div>
          <div className="flex items-center ml-4">
            <Image src="svg/user.svg" alt="Author Icon" width={18} height={18} />
            <span className="ml-2 text-[13px]">{post.author}</span>
          </div>
        </div>
      </div>
      <h2 className="font-semibold mt-2 transition-colors duration-20 px-1 line-clamp-2">
        <a href={`/blog/${post.slug}`} className="hover:text-primary-500 hover:underline">
          {post.title}
        </a>
      </h2>
    </div>
  );
}
