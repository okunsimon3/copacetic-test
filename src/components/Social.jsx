import React from 'react';
import './Social.css'
import FDF_3 from '../assets/FDF_3.mp4';
import greencorrect from '../assets/greencorrect.png';
import mittenfest from '../assets/mittenfest.mp4';
import lightupposts from '../assets/lightupposts.jpeg';
import radseries_3 from '../assets/radseries_3.png';
import Openday from '../assets/Openday_.jpeg';
import Porch_Postcard from '../assets/Porch_Postcard_updated-01.jpeg';
import Final_Cyclones from '../assets/Final_Cyclones_Jumbotron_3CDC.mov';
import Spring_Series from '../assets/Spring_Series_2.mov';
import Frosty_Flicks from '../assets/Frosty_Flicks_2-02.jpeg';
import Los_CunadosStickers from '../assets/Los_CunadosStickerscorrect.png';
import IMG_4048 from '../assets/IMG_4048.jpg';

const socialCards = [
  { id: 1, name: 'Fountain District', type: 'video', src: FDF_3, width: 'w-2', height: 'h-2' },
  { id: 2, name: 'Los Cuñados', type: 'image', src: greencorrect, width: 'w-2', height: 'h-4' },
  { id: 3, name: 'Mittenfest', type: 'video', src: mittenfest, width: 'w-1', height: 'h-3' },
  { id: 4, name: 'Duke Energy', type: 'image', src: lightupposts, width: 'w-2', height: 'h-3' },
  { id: 5, name: 'Adventure Club', type: 'image', src: radseries_3, width: 'w-2', height: 'h-3' },
  { id: 10, name: 'Oscar Mayer', type: 'image', src: Openday, width: 'w-1', height: 'h-1' },
  { id: 7, name: 'Washington Park', type: 'image', src: Porch_Postcard, width: 'w-3', height: 'h-3' },
  { id: 8, name: 'UC Health', type: 'video', src: Final_Cyclones, width: 'w-2', height: 'h-2' },
  { id: 9, name: 'Metro', type: 'video', src: Spring_Series, width: 'w-1', height: 'h-2' },
  { id: 6, name: 'Fountain Square', type: 'image', src: Frosty_Flicks, width: 'w-1', height: 'h-1' },
  { id: 11, name: 'Los Cuñados', type: 'image', src: Los_CunadosStickers, width: 'w-1', height: 'h-2' },
  { id: 12, name: 'Memorial Hall', type: 'image', src: IMG_4048, width: 'w-1', height: 'h-2' },
];

const Social = () => {
  return (
    <div className="social-wrapper">
      {socialCards.map((card) => (
        <div key={card.id} className={`social-card ${card.width} ${card.height}`}>
          <div className="media-container">
            {card.type === 'image' ? (
              <img src={card.src} alt={card.name} />
            ) : (
              <video src={card.src} autoPlay muted loop />
            )}
          </div>
          <div className="social-text">
            <h3>{card.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Social;