import React, { useState } from 'react';
import './Card.css';

const Card = (props) => {
    const [device, setDevice] = useState('');
    // Depending on the window size, it will pick either the mobile or window sized image for optimzation
    const handleWindowSize = () => {
        if (window.innerWidth < 692) {
            setDevice(props.image.mobile);
        } else {
            setDevice(props.image.desktop);
        }
    };

    window.addEventListener('load', handleWindowSize);

    window.addEventListener('resize', handleWindowSize);

    return (
        <div className='card' style={{ backgroundImage: `url(${device})` }}>
            <h2 className='card__title'>{props.text}</h2>
        </div>
    );
};

export default Card;
