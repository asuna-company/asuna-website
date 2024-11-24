"use client";

import React from "react";
import ReactMarkdown from "react-markdown";

export default function SlugContentSection({ slug, content }: { slug: string; content: string }) {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{slug.replace(/-/g, " ")}</h1>
      <div className="prose">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
