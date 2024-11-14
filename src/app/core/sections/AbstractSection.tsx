import React from "react";

interface AbstractSectionProps {
  bgColor?: string;
  children: React.ReactNode;
  align?: string;
}

const AbstractSection: React.FC<AbstractSectionProps> = ({
  bgColor = "bg-[var(--foreground)]",
  children,
  align = 'items-center'
}) => {
  return (
    <section className={`w-full ${bgColor} py-12`}>
      <div className={`max-w-[1440px] w-[90%] mx-auto flex flex-col md:flex-row ${align} justify-between`}>
        {children}
      </div>
    </section>
  );
};

export default AbstractSection;
