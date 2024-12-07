import AbstractSection from "@/app/shared/components/sections/AbstractSection";
import { MarkdownHead } from "../infrastructure/types/markdownHead";
import PrimaryText from "@/app/shared/components/texts/PrimaryTitle";
import TextBadge from "@/app/shared/components/badges/TextBadge";

import Image from 'next/image'

const getBackgroundStyle = () => ({
  backgroundImage: "url('/svg/lines.svg')",
  backgroundSize: "110rem",
  backgroundPosition: "top -80px left 0",
  backgroundRepeat: "no-repeat",
});

export default function SlugMainSection({markdownHead}: {markdownHead: MarkdownHead}) {
  return (
    <div style={getBackgroundStyle()} className="w-full text-left">
      <AbstractSection paddingVertical="pt-4 xs:pt-12 pb-4">
        <div className="flex flex-col pt-12">
          <div className="pb-2"><TextBadge title={markdownHead.tag ?? ''}  /></div>
          <PrimaryText titleFirstPart={markdownHead.title ?? ''} maxWidth={1440} alignLeft={true} fontWeight="font-semibold"  />
          <div className="flex flex-row space-x-8 pt-4">
            <div className="flex space-x-2">
              <Image src="https://cdn.asuna.com.br/svg/user.svg" alt="Author Icon" width={20} height={20} />
              <p className="text-[16px]">{markdownHead.author}</p>
            </div>
            <div className="flex space-x-2">
            <Image src="https://cdn.asuna.com.br/svg/clock-circle.svg" alt="Clock" width={20} height={20} />
              <p className="text-[16px]">{markdownHead.readingTime}</p>
            </div>
          </div>
        </div>
      </AbstractSection>
    </div>
  )
}