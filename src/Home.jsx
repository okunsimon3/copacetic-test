import { useRef } from "react";
import { NavLink } from "react-router-dom"
import './Home.css'
import homeVideo from './assets/Copacetic_Logo_REEL.mov'
import enterImg from './assets/Copa_Buttons_drop-06.png'
import enterImg2 from './assets/Copa_Buttons_drop-05.png'

export default function Home() {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        videoRef.current && videoRef.current.pause();
    };

    const handleMouseLeave = () => {
        videoRef.current && videoRef.current.play();
    };

    return (
        <>
        <div className="home-container">
            <video
                ref={videoRef}
                className="logo-reel"
                src={homeVideo}
                autoPlay
                muted
                loop
            ></video>
            <NavLink 
                className="image-button-wrapper"
                to="/media"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img src={enterImg} alt="Enter Site" className="button-img default" />
                <img src={enterImg2} alt="Enter Site Hover" className="button-img hover" />
            </NavLink>
        </div>
        </>
    )
}