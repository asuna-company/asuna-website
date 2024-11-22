import React from "react";

interface ColumnSectionProps {
  bgColor?: string;
  children: React.ReactNode;
  paddingVertical?: string;
  dataBg?: string;
  maxWidth?: string;
  align?: string;
}

const ColumnSection: React.FC<ColumnSectionProps> = ({
  bgColor = "bg-[var(--foreground)]",
  children,
  paddingVertical = "py-12",
  dataBg = "light",
  maxWidth = "1440px",
  align = "items-center",
}) => {
  return (
    <section className={`w-full ${bgColor} ${paddingVertical}`} data-bg={dataBg}>
      <div
        className={`w-[90%] mx-auto flex flex-col ${align}`}
        style={{ maxWidth: maxWidth }}
      >
        {children}
      </div>
    </section>
  );
};

export default ColumnSection;
