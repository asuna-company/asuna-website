import { useState } from "react";
import testimonials from "../../../../../public/data/testimonals.json";

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
    <div className="max-w-[680px] mx-auto p-6">
      <div className="mb-4">
        <img
          src="/svg/quote.svg"
          alt="Citação"
          width={35}
          height={35}
          className="text-blue-500"
        />
      </div>

      <div>
        <p
          className="text-[24px] font-medium leading-[170%] tracking-[0.01em] text-gray-800 pt-4"
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <div className="border-t border-gray-300 mt-6"></div>

        <div className="mt-4 text-gray-600 flex items-center justify-between">
          <span>
            <span className="font-medium">{author}</span> @ {company}
          </span>
          <div className="flex gap-4">
            <button
              onClick={handlePrevClick}
              className="text-blue-600 font-bold bg-primary-50 px-4 py-2 rounded-full"
            >
              &larr;
            </button>
            <button
              onClick={handleNextClick}
              className="text-blue-600 font-bold bg-primary-50 px-4 py-2 rounded-full"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};