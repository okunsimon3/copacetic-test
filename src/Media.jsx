import { useState } from "react"
import { NavIcon } from './components/NavIcon';
import './Media.css'
import Graphics from './components/Graphic';
import Web from "./components/Web";
import Video from "./components/Video";
import mediaRoom from './assets/mediarender.webp'


export default function Media() {
    const [showGraphic, setShowGraphic] = useState(false);
    const [showWeb, setShowWeb] = useState(false);
    const [showVideo, setShowVideo] = useState(false);

    const handleGraphicClick = () => {
        setShowGraphic(true);
    }

    const handleWebClick = () => {
        setShowWeb(true);
    }

    const handleVideoClick = () => {
        setShowVideo(true);
    }

    const handleCloseAll = () => {
        setShowGraphic(false);
        setShowWeb(false);
        setShowVideo(false);
    };
    return (
        <>
        <NavIcon onMediaClick={handleCloseAll}/>
        <div style={{ backgroundImage: `url(${mediaRoom})` }} className='media-wrapper'>
            <button className="graphic-btn" onClick={handleGraphicClick}>Graphics</button>
            {showGraphic && <Graphics onClose={handleCloseAll} />}
            <button className='web-btn' onClick={handleWebClick}>Web</button>
            {showWeb && <Web onClose={handleCloseAll}/>}
            <button className='video-btn' onClick={handleVideoClick}>Video</button>
            {showVideo && <Video onClose={handleCloseAll}/>}
        </div>
        </>
    )
}