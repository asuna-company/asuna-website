import useMediaQuery from '@/app/hooks/useMediaQuery';
import MobileNavbar from './internals/MobileNavbar';
import DesktopNavbar from './internals/DesktopNavbar';


const Navbar = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className='border-b border-gray-300 sticky top-0 z-20'>
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
    </div>
  )

};

export default Navbar;
