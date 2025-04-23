import React from 'react';
import './Social.css'

const socialCards = [
    { id: 1, name: 'Fountain District', type: 'video', src: './src/assets/FDF_3.mp4', width: 'w-2', height: 'h-2' },
    { id: 2, name: 'Los Cuñados', type: 'image', src: './src/assets/greencorrect.png', width: 'w-2', height: 'h-4' },
    { id: 3, name: 'Mittenfest', type: 'video', src: './src/assets/mittenfest.mp4', width: 'w-1', height: 'h-3' },
    { id: 4, name: 'Duke Energy', type: 'image', src: './src/assets/lightupposts.jpeg', width: 'w-2', height: 'h-3' },
    { id: 5, name: 'Adventure Club', type: 'image', src: './src/assets/radseries_3.png', width: 'w-2', height: 'h-3' },
    { id: 10, name: 'Oscar Mayer', type: 'image', src: './src/assets/Openday_.jpeg', width: 'w-1', height: 'h-1' },
    { id: 7, name: 'Washington Park', type: 'image', src: './src/assets/Porch_Postcard_updated-01.jpeg', width: 'w-3', height: 'h-3' },
    { id: 8, name: 'UC Health', type: 'video', src: './src/assets/Final_Cyclones_Jumbotron_3CDC.mov', width: 'w-2', height: 'h-2' },
    { id: 9, name: 'Metro', type: 'video', src: './src/assets/Spring_Series_2.mov', width: 'w-1', height: 'h-2' },
    { id: 6, name: 'Fountain Square', type: 'image', src: './src/assets/Frosty_Flicks_2-02.jpeg', width: 'w-1', height: 'h-1' },
    { id: 11, name: 'Los Cuñados', type: 'image', src: './src/assets/Los_CunadosStickerscorrect.png', width: 'w-1', height: 'h-2' },
    { id: 12, name: 'Memorial Hall', type: 'image', src: './src/assets/IMG_4048.jpg', width: 'w-1', height: 'h-2' },
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