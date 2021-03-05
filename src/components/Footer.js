import React from 'react';
import logo from '../images/logo.svg';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import instagram from '../images/icon-instagram.svg';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='container footer__container'>
                <div className='left-col'>
                    <img className='footer__logo' src={logo} alt='logo' />

                    <ul>
                        <li className='footer__menu-item'>About</li>
                        <li className='footer__menu-item'>Careers</li>
                        <li className='footer__menu-item'>Events</li>
                        <li className='footer__menu-item'>Products</li>
                        <li className='footer__menu-item'>Support</li>
                    </ul>
                </div>
                <div className='right-col'>
                    <div className='footer__social'>
                        <div className='footer__social-item'>
                            <a href='https://facebook.com'>
                                <img src={facebook} alt='facebook icon' />
                            </a>
                        </div>
                        <div className='footer__social-item'>
                            <a href='https://twitter.com'>
                                <img src={twitter} alt='twitter icon' />
                            </a>
                        </div>
                        <div className='footer__social-item'>
                            <a href='https://pinterest.com'>
                                <img src={pinterest} alt='pinterest icon' />
                            </a>
                        </div>
                        <div className='footer__social-item'>
                            <a href='https://instagram.com'>
                                <img src={instagram} alt='instagram icon' />
                            </a>
                        </div>
                    </div>
                    <div className='copyright'>
                        &copy; 2021 Loopstudios. All rights reserved.{' '}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
