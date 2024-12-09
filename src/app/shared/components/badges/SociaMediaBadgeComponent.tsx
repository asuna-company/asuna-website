import React from "react";
import Image from "next/image"
import { socialMedia, SocialMediaType } from "./types/SocialMediaType";

interface SocialMediaProps {
  type: SocialMediaType;
}

export const SocialMediaBadgeComponent: React.FC<SocialMediaProps> = ({ type }) => {
  const media = socialMedia[type];

  return (
    <a href={media.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 h-9 bg-primary-500 hover:bg-blue-700 rounded-full transition duration-300">
      <Image src={media.icon} width={16} height={16} alt="Ícone"/>
    </a>
  );
};


