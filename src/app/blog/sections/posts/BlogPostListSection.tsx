"use client";

import { useState } from "react";
import { Post } from "../../infrastructure/types/PostType";
import BlogCard from "@/app/core/components/cards/BlogCard";

export default function BlogPostListSection({ posts }: { posts: Post[] }) {
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 15;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginatedPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <>
      <div className="grid grid-cols-3 gap-8 mb-8">
        {paginatedPosts.map((post, index) => ( <BlogCard key={post.slug} post={post} />))}
      </div>

      <div className="flex justify-center mt-8">
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`px-3 py-1 mx-1 ${currentPage === pageNumber ? 'text-black underline' : 'text-primary-500'}`}
              >
                {pageNumber}
              </button>
            );
          })}
      </div>
    </>
  );
}
