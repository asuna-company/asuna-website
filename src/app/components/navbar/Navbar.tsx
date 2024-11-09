import MobileNavbar from './internals/MobileNavbar';
import DesktopNavbar from './internals/DesktopNavbar';
import useMediaQuery from 'core/app/hooks/useMediaQuery';

const Navbar = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
};

export default Navbar;
