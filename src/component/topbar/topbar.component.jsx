import { Link } from 'react-router-dom';
import { useState } from "react";
import Sidebar from './sidebar.component';
import CartIcon from '../../assets/interface-icons/shopping-bag.png';
import MenuIcon from '../../assets/interface-icons/menu.png';
import HeartIcon from '../../assets/interface-icons/love.png';
import SearchIcon from '../../assets/interface-icons/magnifying-glass.png';

import './topbar.styles.css';

const Topbar = () => {

  const [ isSidenavOpen, setIsSidenavOpen ] = useState(false)
  const sidebarToggle = () => {
    if (isSidenavOpen === false) {
      setIsSidenavOpen(true)
    }
    else {
      setIsSidenavOpen(false)
    }
  }

  return (
    <div>
      <div className="topbar-container">
        <div className='d-flex jc-flex-start al-item-cen'>
          <div className='side-menu-icon' onClick={sidebarToggle} style={{cursor:'pointer'}}>
            <img src={MenuIcon} alt='Sidebar icont'/>
          </div>
          <div className='ml-1'>
            <h3>Al Zehra Veils</h3>
          </div>
        </div>
        <div className='d-flex jc-space-btw al-item-cen'>
          
          <div>
            <Link to='/cart'><img className='topbar-icons' src={SearchIcon} alt='Trend Stitchers cart'/></Link>
          </div>
          <div>
            <Link to='/user-profile'><img className='topbar-icons' src={HeartIcon} alt='Trend Stitchers user profile'/></Link>
          </div>
          <div>
            <Link to='/cart'><img className='topbar-icons' src={CartIcon} alt='Trend Stitchers cart'/></Link>
          </div>
          
        </div>
      </div>
      { isSidenavOpen && <Sidebar sidebarToggle={sidebarToggle} /> }
    </div>
  );
};

export default Topbar;
