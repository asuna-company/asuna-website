import useMediaQuery from '@/app/hooks/useMediaQuery';
import MobileNavbar from './internals/MobileNavbar';
import DesktopNavbar from './internals/DesktopNavbar';


const Navbar = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
};

export default Navbar;
