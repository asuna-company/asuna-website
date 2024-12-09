import { useIsMobile } from "@/app/shared/constants/mediaQueryConstants";
import Image from "next/image";
import { blurDataUrl } from "../../constants/imageConstants";

interface CheckTextProps {
  title: string;
  mobileTitle?: string;
}

export default function CheckText({ title, mobileTitle = title }: CheckTextProps) {
  return (
    <div className="flex items-start p-0 m-0">
      <div className="bg-primary-500 bg-opacity-10 rounded-full p-[6px] mr-3 w-6 h-6 flex items-center justify-center">
        <Image
          src="https://cdn.asuna.com.br/svg/check_icon.svg"
          alt="Simbolo de Checagem"
          width={24}
          height={24}
          className="w-full h-full object-contain"
          placeholder="blur"
          loading="lazy"
          blurDataURL={blurDataUrl}
        />
      </div>
      <span className="text-p2 font-poppins font-medium text-neutral-200 text-left">
        {useIsMobile() ? mobileTitle : title}
      </span>
    </div>
  );
}