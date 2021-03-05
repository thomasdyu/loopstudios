import React, { useState } from 'react';
import SideMenu from '../components/Sidebar';
import './Navbar.css';
import logo from '../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => setSidebar(!sidebar);

    return (
        <nav className='nav-menu'>
            <img className='nav__logo' src={logo} alt='logo' />
            <ul id='menu-items'>
                <li>About</li>
                <li>Careers</li>
                <li>Events</li>
                <li>Products</li>
                <li>Support</li>
            </ul>
            <div className='hamburger' onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faBars} size='lg' />
            </div>
            <SideMenu
                sidebar={sidebar ? 'sidebar active' : 'sidebar'}
                toggleSidebar={toggleSidebar}
            />
        </nav>
    );
};

export default Navbar;
