import GoBack from "./GoBack";
import './Web.css'

export default function Web({ onClose }) {
    return (
        <div className="web-page">
            <GoBack onClose={onClose}/>
            <h2>Web Design/Development</h2>
            <div className="web-wrapper">
            <a
                    href="https://bearcastmedia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="web-item"
                >
                    <img src="../src/assets/blob.webp" />
                    <h3>Bearcast Media</h3>
                </a>
                <a
                    href="https://example-nonprofit.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="web-item"
                >
                    <img src="../src/assets/blob.webp" />
                    <h3>Non-Profit</h3>
                </a>
                <a
                    href="https://itsanewdayohio.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="web-item"
                >
                    <img src="../src/assets/blob.webp" />
                    <h3>It's A New Day Behavioral Daycare</h3>
                </a>
            </div>
        </div>
    );
}