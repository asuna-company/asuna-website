"use client";

import { useState } from "react";
import { Post } from "../../infrastructure/types/PostType";

export default function BlogPostListSection({posts}: {posts: Post[]}) {
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 15;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginatedPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageChange = (direction: 'next' | 'previous') => {
    if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'previous' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <h1>qUANTOIDAE: {posts.length}</h1> 

      <div className="grid grid-cols-3 gap-8 mb-8">
          {paginatedPosts.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => handlePageChange('previous')}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-2 bg-gray-300 text-black disabled:bg-gray-100"
          >
            Página Anterior
          </button>
          <button
            onClick={() => handlePageChange('next')}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-2 bg-gray-300 text-black disabled:bg-gray-100"
          >
            Próxima Página
          </button>
        </div>
      )}
    </>
  );
}

function BlogPostCard({ post }: { post: Post }) {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="text-lg font-bold">{post.title}</h3>
      <p>{post.title}</p>
    </div>
  );
}
