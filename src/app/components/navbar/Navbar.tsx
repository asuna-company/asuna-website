import MobileNavbar from './internals/MobileNavbar';
import DesktopNavbar from './internals/DesktopNavbar';
import { isMobile } from '@/app/core/constants/mediaQueryConstants';


const Navbar = () => {
  return (
    <div className='border-b border-gray-300 sticky top-0 z-20'>
      {isMobile() ? <MobileNavbar /> : <DesktopNavbar />}
    </div>
  )

};

export default Navbar;
