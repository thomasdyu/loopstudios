import Navbar from './Navbar';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className='container'>
                <Navbar />
                <div className='header__container '>
                    <h1 className='header__title'>immersive</h1>
                    <h1 className='header__title'>experience</h1>
                    <h1 className='header__title'>that deliver</h1>
                </div>
            </div>
        </header>
    );
};

export default Header;
