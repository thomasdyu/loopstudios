import React from 'react';
import mainImg from '../images/desktop/image-interactive.jpg';
import './Main.css';

const Main = () => {
    return (
        <main className='container'>
            <div className='img-container'>
                <img className='main__img' src={mainImg} alt='Hero' />
            </div>

            <div className='main__text-container'>
                <h1 className='main__text-heading'>
                    the leader in interactive vr
                </h1>
                <p className='main__text-paragraph'>
                    Founded in 2011, Loopstudios has been producing world-class
                    virtual reality projects for some of the best companies
                    around the globe. Our award-winning creations have
                    transformed businesses through digital experiences that bind
                    to their brand.
                </p>
            </div>
        </main>
    );
};

export default Main;
