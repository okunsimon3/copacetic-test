import './Video.css'
import GoBack from './GoBack'

export default function Video({ onClose }) {
    return (
        <div className='video-page'>
            <GoBack onClose={onClose}/>
            <h2>Video</h2>
            <div className="video-wrapper">
                <div className="video-item">
                <iframe width="560" height="200" src="https://www.youtube.com/embed/PXQlxvN-D4M?si=j5F3nTbG3DGBDsoV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h3>Animation Reel</h3>
                </div>
                <div className="video-item">
                <iframe width="560" height="200" src="https://www.youtube.com/embed/UukxZ5GM52g?si=otvqr3IecC85lFQX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h3>Larry the Science Guy</h3>
                </div>
                <div className="video-item">
                <iframe width="560" height="200" src="https://www.youtube.com/embed/UZdSWX5mGs4?si=BwE-R5n3ANhSJBcX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h3>Larry the Science Guy</h3>
                </div>
            </div>
        </div>
    )
}