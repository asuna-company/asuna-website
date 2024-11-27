"use client";

import AbstractSection from "@/app/core/components/sections/AbstractSection";
import React from "react";
import ReactMarkdown from "react-markdown";

export default function SlugContentSection({ params }: { params: { slug: string, content: string } }) {
  const {slug, content } = params;

  return (
    <AbstractSection>
      <div className="prose max-w-[1200px] ">
        <ReactMarkdown >{content}</ReactMarkdown>
      </div>
    </AbstractSection>
  );
}
