import { useState } from "react";
import testimonials from "../../../../../public/data/testimonals.json";
import { useIsLaptop } from "../../constants/mediaQueryConstants";

import Image from 'next/image'
import { blurDataUrl } from "../../constants/imageConstants";
import LeftArrowImage from "../images/arrows/LeftArrowImage";
import RightArrowImage from "../images/arrows/RightArrowImage";

export default function TestimonialCard() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { text, author, company } = testimonials[currentTestimonialIndex];

  return (
    <div className="max-w-[620px] mx-auto pt-12 xs:pt-0">
      <div className="mb-4 bg-primary-50 p-2 rounded-md max-w-max">
        <Image
          src="https://cdn.asuna.com.br/svg/quote.svg"
          alt="Simbolo de Citação"
          width={useIsLaptop() ? 28 : 32}
          height={useIsLaptop() ? 28 : 32}
          className="text-primary-500/90"
          placeholder="blur"
          loading="lazy"
          blurDataURL={blurDataUrl}
        />
      </div>

      <div>
        <h3 className="text-[18px] xs:text-[24px] font-medium leading-[170%] tracking-[0.01em] text-gray-800 pt-4" dangerouslySetInnerHTML={{ __html: text }}/>
        <div className="border-t border-gray-300 mt-6"></div>
        <div className="mt-4 text-gray-600 flex items-center justify-between">
          <span className="text-[16px] truncate max-w-[230px] xs:max-w-full">
            <span className="font-semibold">{author}</span> @ {company}
          </span>
          <div className="flex gap-4">
            <button onClick={handlePrevClick} className="text-blue-600 font-bold bg-primary-50 px-4 py-2 rounded-full">
              <LeftArrowImage/>
            </button>
            <button onClick={handleNextClick} className="text-blue-600 font-bold bg-primary-50 px-4 py-2 rounded-full">
              <RightArrowImage/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
