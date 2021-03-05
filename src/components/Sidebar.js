import './Sidebar.css';
import logo from '../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const SideMenu = (props) => {
    return (
        <nav className={props.sidebar}>
            <div className='sidebar__container'>
                <img
                    className='nav__logo'
                    src={logo}
                    alt='logo'
                    onClick={props.toggleSidebar} //props.toggleSidebar will trigger the parent (navbar) function call for closing or opening of the side menu.
                />
                <FontAwesomeIcon
                    icon={faTimes}
                    size='2x'
                    style={{ color: '#ffffff' }}
                    className='close'
                    onClick={props.toggleSidebar}
                />
            </div>
            <ul className='sidebar__items' onClick={props.toggleSidebar}>
                <li className='sidebar__item'>About</li>
                <li className='sidebar__item'>Careers</li>
                <li className='sidebar__item'>Event</li>
                <li className='sidebar__item'>Products</li>
                <li className='sidebar__item'>Support</li>
            </ul>
        </nav>
    );
};

export default SideMenu;
