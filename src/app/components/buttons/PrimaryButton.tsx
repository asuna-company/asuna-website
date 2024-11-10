import { isMobile } from "@/app/core/constants/mediaQueryConstants";

interface PrimaryButtonProps {
    title: string;
    mobileTitle?: string;
    onClick: () => void;
    paddingY?: string;
}

export default function PrimaryButton({ title, mobileTitle = title, onClick, paddingY = '12.5px' }: PrimaryButtonProps) {
    return (
        <button
            className="
          inline-block
          h-auto
          px-5
          mx-auto
          items-center
          justify-center
          text-center
          text-white
          font-poppins
          font-medium
          text-p2
          bg-primary-500
          rounded-lg
          outline outline-[5px] outline-primary-100
          hover:bg-blue-700
          hover:outline-primary-200
          transition-all duration-200
          relative
        "
            style={{ paddingTop: paddingY, paddingBottom: paddingY }}
            onClick={onClick}
        >
            {isMobile() ? mobileTitle : title}
        </button>
    );
}
