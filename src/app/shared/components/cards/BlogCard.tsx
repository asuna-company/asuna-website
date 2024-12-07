import { Post } from "@/app/blog/infrastructure/types/PostType";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <div className="flex-shrink-0 sm:max-w-[80%] md:max-w-[500px] max-w-[95%] flex flex-col snap-start">
      <Link href={`/blog/${post.slug}`}>
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={500}
          height={300}
          className="rounded-lg"
        />
      </Link>

      <div className="flex justify-between items-center mt-2 px-1">
        <p className="text-p2 text-primary-500 text-[12.5px] xs:text-[14px]"> {post.tag} </p>

        <div className="flex">
          <div className="flex items-center">
            <Image src="https://cdn.asuna.com.br/svg/clock-circle.svg" alt="Símbolo de Relógio" width={18} height={18}/>
            <span className="ml-2 text-[13px]">{post.readingTime}</span>
          </div>
          <div className="flex items-center ml-4">
            <Image src="https://cdn.asuna.com.br/svg/user.svg" alt="Ícone do Autor" width={18} height={18}/>
            <span className="ml-2 text-[13px]">{post.author}</span>
          </div>
        </div>
      </div>
      
      <h2 className="font-semibold mt-2 transition-colors duration-20 px-1 line-clamp-2">
        <Link href={`/blog/${post.slug}`} passHref className="hover:text-primary-500 hover:underline">
          {post.title}
        </Link>
      </h2>
    </div>
  );
}
