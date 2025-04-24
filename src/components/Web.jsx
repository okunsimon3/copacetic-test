import GoBack from "./GoBack";
import './Web.css';
import newDay from '../assets/newday.png';
import bearcast from '../assets/bearcast.png';
import sideBySide from '../assets/sidebyside.png';

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
                    <img src={bearcast} />
                    <h3>Bearcast Media</h3>
                </a>
                <a
                    href="https://sideglow.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="web-item"
                >
                    <img src={sideBySide} />
                    <h3>Side By Side</h3>
                </a>
                <a
                    href="https://itsanewdayohio.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="web-item"
                >
                    <img src={newDay} />
                    <h3>It's A New Day Behavioral Daycare</h3>
                </a>
            </div>
        </div>
    );
}