import React from 'react';
import Card from './Card';
import './Gallery.css';
import cards from './cardData';

const Gallery = () => {
    const createCard = (card) => {
        return <Card key={card.id} text={card.text} image={card.image} />;
    };

    return (
        <div className='gallery container'>
            <div className='gallery__heading'>
                <h1 className='gallery__title'>Our Creations</h1>
            </div>
            <button className='btn'>See All</button>
            <div className='gallery__container'>{cards.map(createCard)}</div>
        </div>
    );
};

export default Gallery;
