import React, { useState } from "react";
import './Photography.css'
import play from '../assets/PlayingGames4.jpeg'
import cat from '../assets/DSCF1336.JPG'
import city from '../assets/IMG_8923.JPG'
import dellPlay from '../assets/PlayingGames1.jpeg'
import city2 from '../assets/IMG_8860.JPG'
import city3 from '../assets/IMG_9001.JPG'
import france2 from '../assets/DSCF1195.JPG'
import france3 from '../assets/DSCF1284.JPG'

import arrow from '../assets/arrow.png'


const photographyCards = [
    { id: 1, name: 'Photo 1', src: play, width: 'w-2', height: 'h-4' },
    { id: 2, name: 'Photo 2', src: cat, width: 'w-2', height: 'h-2' },
    { id: 3, name: 'Photo 3', src: city, width: 'w-2', height: 'h-4' },
    { id: 4, name: 'Photo 4', src: dellPlay, width: 'w-2', height: 'h-3' },
    { id: 5, name: 'Photo 5', src: city2, width: 'w-2', height: 'h-4' },
    { id: 6, name: 'Photo 6', src: city3, width: 'w-2', height: 'h-2' },
    { id: 7, name: 'Photo 7', src: france3, width: 'w-2', height: 'h-3' },
    { id: 8, name: 'Photo 8', src: france2, width: 'w-2', height: 'h-2' },
    // ...more
    ];
    
const Photography = () => {
const [lightboxOpen, setLightboxOpen] = useState(false);
const [lightboxIndex, setLightboxIndex] = useState(0);

const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
};

const closeLightbox = () => setLightboxOpen(false);

const nextImage = () => setLightboxIndex((prevIndex) => (prevIndex + 1) % photographyCards.length);
const prevImage = () => setLightboxIndex((prevIndex) => (prevIndex - 1 + photographyCards.length) % photographyCards.length);

return (
    <div className="social-wrapper">
    {photographyCards.map((card, index) => (
        <div key={card.id} className={`social-card ${card.width} ${card.height}`}>
            <div className="media-container" onClick={() => openLightbox(index)}>
                <img src={card.src} alt={card.name} />
            </div>
        </div>
        ))}

        {lightboxOpen && (
            <div className="lightbox" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <img src={photographyCards[lightboxIndex].src} alt="" />
            </div>
            <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
                <img src={arrow} alt="Previous"/>
            </button>
            <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
                <img src={arrow} alt="Next"/>
            </button>
            <button className="lightbox-close" onClick={(e) => { e.stopPropagation(); closeLightbox(); }}>×</button>
            </div>
        )}
        </div>
    );
};
export default Photography;