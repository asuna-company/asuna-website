import { useEffect, useState, lazy, Suspense } from "react";

const MobileNavbar = lazy(() => import("./internals/MobileNavbar"));
const DesktopNavbar = lazy(() => import("./internals/DesktopNavbar"));

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobileDevice = window.innerWidth <= 768;
    setIsMobile(isMobileDevice);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = () => {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    navbar.classList.toggle("border-b", scrollPosition > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar border-gray-300 sticky top-0 z-50">
      <Suspense fallback={<div>...</div>}>
        {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
      </Suspense>
    </div>
  );
}
