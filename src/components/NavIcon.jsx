import { useState } from 'react';
import './NavIcon.css';
import { NavLink } from 'react-router-dom';

export function NavIcon({ onMediaClick }) {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(prev => !prev);
    };

    const handleMediaClick = () => {
        if (onMediaClick) onMediaClick(); // closes the Graphic component
        setOpen(false); // close sidebar
    };

    return (
    <>
    {/* Static icons */}
    <div className="menu-icon" onClick={toggleMenu}>
        {open ? '×' : '≡'}
    </div>

    <div className={`side-menu ${open ? 'show' : ''}`}>
    <nav>
        <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Media" onClick={handleMediaClick}>Media</NavLink>
        </ul>
    </nav>
    </div>
    </>
);
}