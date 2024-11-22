import React from "react";

interface AbstractSectionProps {
  bgColor?: string;
  children: React.ReactNode;
  align?: string;
  paddingVertical?: string
  dataBg?: string
  maxWidth?: string
}

const AbstractSection: React.FC<AbstractSectionProps> = ({
  bgColor = "bg-[var(--foreground)]",
  children,
  align = 'items-center',
  paddingVertical = 'py-12',
  dataBg = 'light',
  maxWidth = '1440px'
}) => {
  return (
    <section className={`w-full ${bgColor} ${paddingVertical} overflow-hidden`} data-bg={dataBg}>
      <div className={`w-[90%] mx-auto flex flex-col md:flex-row ${align} justify-between`} style={{maxWidth: maxWidth}}>
        {children}
      </div>
    </section>
  );
};

export default AbstractSection;
