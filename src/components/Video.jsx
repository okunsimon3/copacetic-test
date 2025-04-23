import './Video.css'
import GoBack from './GoBack'

export default function Video({ onClose }) {
    return (
        <div className='video-page'>
            <GoBack onClose={onClose}/>
            <h2>Video</h2>
            <div className="video-wrapper">
                <div className="video-item">
                    <iframe width="560" height="200" src="https://www.youtube.com/embed/-xTGm-GLiN8?si=DfgsvQskEBkHzvnL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h3>Animation Reel</h3>
                </div>
                <div className="video-item">
                    <iframe width="560" height="200" src="https://www.youtube.com/embed/-xTGm-GLiN8?si=DfgsvQskEBkHzvnL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h3>Behind The Scenes</h3>
                </div>
            </div>
        </div>
    )
}