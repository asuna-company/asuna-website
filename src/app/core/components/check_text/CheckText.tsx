import { useIsMobile } from "@/app/core/constants/mediaQueryConstants";
import Image from "next/image";

interface CheckTextProps {
  title: string;
  mobileTitle?: string;
}

export default function CheckText({
  title,
  mobileTitle = title,
}: CheckTextProps) {
  return (
    <div className="flex items-start p-0 m-0">
      <div className="bg-primary-500 bg-opacity-10 rounded-full p-2 mr-3 w-6 h-6 flex items-center justify-center">
        {/* Tamanho de imagem muito pequeno */}
        <Image
          src="/svg/check_icon.svg"
          alt="Check Mark"
          width={24}
          height={24}
          priority
        />
      </div>
      <span className="text-p2 font-poppins font-medium text-neutral-200 text-left">
        {useIsMobile() ? mobileTitle : title}
      </span>
    </div>
  );
}
