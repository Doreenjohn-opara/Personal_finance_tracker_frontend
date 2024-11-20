import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/ICON_WHITE.png';
import brandName from '../../assets/NAME.png';
import { bottomNavItems, navItems} from '../navbar/NavList';
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";


const SideNav = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
      };

  return (
    <>
        <section className={`sidenav ${isCollapsed ? 'collapsed' : ''}`}>
                <div className='sidenav-header'>
                    <div className="logo-section">
                        <Link to={"/"} className='logo'>
                                <img src={logo} alt="App Logo" />
                                {!isCollapsed && <span className="company-name"><img src={brandName} alt="Brand Logo" width={70}/></span>}
                        </Link>
                    </div>
                    <button className="collapse-btn" onClick={toggleCollapse}>
                    <TbLayoutSidebarRightCollapseFilled/>
                    </button>
                </div>
                <div className="sidenav-items">
                    {navItems.map((item, index) => (
                        <a key={index} href={item.path} className="sidenav-link">
                            <div className="icon-sidenav">{item.icon}</div>
                            {!isCollapsed && <span className="label">{item.name}</span>}
                      </a>
                    ))}
                </div>
                <div className='bottomsidenav-items'>
                    {bottomNavItems.map((item, index) => (
                            <a key={index} href={item.path} className="sidenav-link">
                                <div className="icon-sidenav">{item.icon}</div>
                                {!isCollapsed && <span className="label">{item.name}</span>}
                        </a>
                        ))}
                </div>

        </section>
    </>
  )
}

export default SideNav;