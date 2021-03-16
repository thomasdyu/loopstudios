import React from 'react';
import MainImg from '../images/desktop/image-interactive.jpg';
import './Main.css';

const Main = () => {
    return (
        <div className='container'>
            <div className='content-wrapper'>
                <img src={MainImg} alt='' />
                <div className='text-wrapper'>
                    <h1>the leader in interactive vr</h1>
                    <p>
                        Founded in 2011, Loopstudios has been producing
                        world-class virtual reality projects for some of the
                        best companies around the globe. Our award-winning
                        creations have transformed buesinesses through digital
                        experiences that bind to their brand.{' '}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
