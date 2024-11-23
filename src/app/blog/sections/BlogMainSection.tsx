import AbstractSection from "@/app/core/components/sections/AbstractSection";
import { Post } from "../types/PostType";
import PrimaryText from "@/app/core/components/texts/PrimaryTitle";
import TextBadge from "@/app/core/components/badges/TextBadge";

const cdnFilesUrl = "https://cdn.asuna.com.br/posts/files.json";


export default async function BlogMainSection() {
  const res = await fetch(cdnFilesUrl, {headers: { Accept: "application/json" }});

  if (!res.ok) {
    throw new Error(`Erro ao carregar os posts: ${res.statusText}`);
  }

  const posts: Post[] = await res.json();


  return (
    <AbstractSection align="items-start">
      <div className="pt-24">
        <div className="space-x-3">
          <TextBadge title="Nosso Blog"/>
          <TextBadge title="Mercado de Software"/>
        </div>
        <PrimaryText titleFirstPart="Tudo sobre tecnologia e o" titleSecondPart="mercado digital!" maxWidth={650} alignLeft={true}/>  
      </div>
    </AbstractSection>
  )
}