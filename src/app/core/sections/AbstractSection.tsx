import React from "react";

interface AbstractSectionProps {
  bgColor?: string;
  children: React.ReactNode;
  align?: string;
  paddingVertical?: string
  dataBg?: string
}

const AbstractSection: React.FC<AbstractSectionProps> = ({
  bgColor = "bg-[var(--foreground)]",
  children,
  align = 'items-center',
  paddingVertical = 'py-12',
  dataBg = 'light'
}) => {
  return (
    <section className={`w-full ${bgColor} ${paddingVertical}`} data-bg={dataBg}>
      <div className={`max-w-[1440px] w-[90%] mx-auto flex flex-col md:flex-row ${align} justify-between`}>
        {children}
      </div>
    </section>
  );
};

export default AbstractSection;
