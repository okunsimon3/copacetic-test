import { useRef } from "react";
import { NavLink } from "react-router-dom"
import './Home.css'
import reactLogo from './assets/react.svg'

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
            <img src={reactLogo}></img>
            <h3>Hello</h3>
            <NavLink 
                className="home-link"
                to="./media"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >Enter Site</NavLink>
        </div>
        </>
    )
}