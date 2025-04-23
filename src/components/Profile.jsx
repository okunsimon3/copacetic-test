import './Profile.css'
import profileImg from '../assets/groupprofile_2.jpg'
import headshot from '../assets/headshot.JPG'


export default function Profile() {
    return (
        <div className="profile-wrapper">
            <div className="profile-img">
                <img src={profileImg}/>
            </div>
            <div className="profile-text">
                <h2>Who We Are</h2>
                <p>We are a small team of creatives, each with our own media specialization. With years of both school and work experience we have the tools to create engaging media for any business.</p>
            </div>
            <div className='team-wrapper'>
                    <div className='team-item'>
                        <img src={headshot}/>
                        <h3>Aiden Horstmeier</h3>
                        <p>BFA in Media Production</p>
                    </div>
                    <div className='team-item'>
                        <img src={headshot}/>
                        <h3>Simon Okun</h3>
                        <p>BFA in Media Production</p>
                    </div>
                </div>
        </div>
    );
}