import React, { useEffect, useRef, useState } from "react";
import './ImageCarousel.css'
import arrow from '../assets/arrow.png'

export default function ImageCarousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);
    const timeoutRef = useRef(null);
    const isHovering = useRef(false);
  
    const startAutoSlide = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            if (!isHovering.current) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }
        }, 5000);
        };
    
        useEffect(() => {
        startAutoSlide();
        return () => {
            clearInterval(intervalRef.current);
            clearTimeout(timeoutRef.current);
        };
        }, [images]);
    
        const handleManualNav = (direction) => {
        clearInterval(intervalRef.current);
        clearTimeout(timeoutRef.current);
    
        setCurrentIndex((prevIndex) => {
            if (direction === "next") return (prevIndex + 1) % images.length;
            return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
        });
    
        timeoutRef.current = setTimeout(() => {
            startAutoSlide();
        }, 5000);
        };
    
        const handleMouseEnter = () => {
        isHovering.current = true;
        clearInterval(intervalRef.current);
        };
    
        const handleMouseLeave = () => {
        isHovering.current = false;
        startAutoSlide();
        };
    
        return (
        <div
            className="carousel-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="carousel-image"
            />
            <button
            className="arrow left-arrow"
            onClick={() => handleManualNav("prev")}
            >
            <img src={arrow} alt="Previous" className="arrow-icon" />
            </button>
            <button
            className="arrow right-arrow"
            onClick={() => handleManualNav("next")}
            >
            <img src={arrow} alt="Next" className="arrow-icon" />
            </button>
        </div>
    );
}