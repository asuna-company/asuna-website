"use client";

import React from "react";
import ReactMarkdown from "react-markdown";

export default function SlugContentSection({ params }: { params: { slug: string, content: string } }) {
  const {slug, content } = params;

  return (
    <div className="mx-auto p-8">
      <div className="prose max-w-[1440px]">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
