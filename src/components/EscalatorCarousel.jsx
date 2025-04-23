import { useRef, useEffect, useCallback } from "react";
import './EscalatorCarousel.css';
import blob from '../assets/blob.webp'
import terrain from '../assets/terrain.webp'
import graphicImg from '../assets/graphic.webp'
import pattern from '../assets/pattern.webp'
import wave from '../assets/wave.webp'

const slides = [
  { title: 'Branding', text: 'Elevate your branding to new heights. ', image: blob },
  { title: 'Animation', text: 'Creative 2d/3d animation', image: terrain },
  { title: 'Graphic Design', text: 'Custom graphics tailored to your needs', image: graphicImg },
  { title: 'Photography', text: 'Professional quality photos for marketing anything', image: pattern },
  { title: 'Web Development', text: 'Bring your website to life with creativity', image: wave }
];

export default function EscalatorCarousel() {
  const trackRef = useRef(null);
  const animationFrame = useRef(null);
  const position = useRef(0);
  const isPaused = useRef(false);
  const speed = 3;

  const animate = useCallback(() => {
    if (!isPaused.current && trackRef.current) {
      const track = trackRef.current;
      const slideWidth = track.scrollWidth / 2;
  
      position.current -= speed;
  
      if (Math.abs(position.current) >= slideWidth + 26.8) {
        // Reset position immediately with no transition
        position.current = 0;
        track.style.transition = 'none';
        track.style.transform = `translateX(0px)`;
  
        // Force reflow
        track.offsetHeight;
  
        // Re-enable transition *AFTER* one frame
        requestAnimationFrame(() => {
          track.style.transition = 'transform 0.1s linear';
        });
      } else {
        // Smooth transition during normal scrolling
        track.style.transform = `translate3d(${position.current}px, 0, 0)`;
      }
    }
  
    animationFrame.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      track.style.transition = 'transform 0.1s linear';
    }

    animationFrame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame.current);
  }, [animate]);

  const handleMouseEnter = () => {
    isPaused.current = true;
  };

  const handleMouseLeave = () => {
    isPaused.current = false;
  };

  const doubledSlides = [...slides, ...slides,]; // loop effect

  return (
    <div 
      className="carousel-wrapper"
    >
      <div className="carousel-track" ref={trackRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {doubledSlides.map((slide, index) => (
          <div
            key={index}
            className="carousel-slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="carousel-content">
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

