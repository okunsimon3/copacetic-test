import './Profile.css'
import profileImg from '../assets/IMG_9052.JPG'
import headshot from '../assets/headshot.JPG'
import headshotA from '../assets/headshotA.jpg'
import { Link } from 'react-router-dom';



export default function Profile() {
    return (
        <div className="profile-wrapper">
            <div className="profile-img">
                <img src={profileImg}/>
            </div>
            <div className="profile-text">
                <h2>Who We Are</h2>
                <p>We are a small team of creatives, each with our own media specialization. With years of both school and work experience we have the tools to create engaging media for any business.</p>
                <Link to='/contact'>
                    <button className='contact-button'>Get In Touch</button>
                </Link>
            </div>
            <div className='team-wrapper'>
                    <div className='team-item'>
                        <img src={headshotA}/>
                        <div className='team-item-content'>
                            <h3>Aidan Horstmeier</h3>
                            <h4>BFA in Media Production</h4>
                            <p>What inspires me?</p>
                            <a href='https://www.linkedin.com/in/aidanhorstmeier/' target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                    </div>
                    <div className='team-item'>
                        <img src={headshot}/>
                        <div className='team-item-content'>
                            <h3>Simon Okun</h3>
                            <h4>BFA in Media Production</h4>
                            <p>I grew up on the internet — exploring websites, watching videos. Just like my family and friends, media has been with me throughout my life and has shaped me into the person I am today.</p>
                            <a href='https://www.linkedin.com/in/simonokun/' target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                    </div>
            </div>
        </div>
    );
}