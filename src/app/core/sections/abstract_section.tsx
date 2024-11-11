import React from "react";

interface AbstractSectionProps {
  bgColor?: string;
  children: React.ReactNode;
}

const AbstractSection: React.FC<AbstractSectionProps> = ({
  bgColor = "bg-[var(--foreground)]",
  children,
}) => {
  return (
    <section className={`w-full ${bgColor} py-12`}>
      {/* <div className="max-w-[1380px] w-[90%] mx-auto px-4 flex flex-col md:flex-row items-center justify-between"> */}
      <div className="max-w-[1380px] w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between">
        {children}
      </div>
    </section>
  );
};

export default AbstractSection;
