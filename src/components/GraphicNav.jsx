import './GraphicNav.css'

export default function GrpahicNav({setActiveTab}) {
    return(
        <div className="graphic-navbar">
            <div>
                <a onClick={() => setActiveTab('social')}>Social Media</a>
            </div>
            <div>
                <a onClick={() => setActiveTab('magazines')}>Magazines</a>
            </div>
            <div>
                <a onClick={() => setActiveTab('illustrations')}>Illustrations</a>
            </div>
        </div>
    )
}