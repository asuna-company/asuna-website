import { isMobile } from "@/app/core/constants/mediaQueryConstants";
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
    <div className="flex items-center p-4 border rounded-lg">
      <div className="bg-primary-500 bg-opacity-10 rounded-full p-2 mr-3 w-6 h-6 flex items-center justify-center">
        <Image
          src="/svg/check_icon.svg"
          alt="Check Mark"
          width={12}
          height={12}
          priority
        />
      </div>
      <span className="text-p2 font-poppins font-medium text-black">
        {isMobile() ? mobileTitle : title}
      </span>
    </div>
  );
}
