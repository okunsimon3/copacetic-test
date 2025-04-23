import { useState } from 'react'
import GoBack from './GoBack'
import './Graphic.css'
import GrpahicNav from './GraphicNav'
import Social from './Social'
import Magazines from './Magazines'
import Illustrations from './Illustrations'

export default function Graphics({onClose}) {

    const [activeTab, setActiveTab] = useState('social');

    const renderContent = () => {
        switch (activeTab) {
            case 'social':
                return <Social />;
            case 'magazines':
                return <Magazines />;
            case 'illustrations':
                return <Illustrations />;
            default:
                return null;
        }
    }
    return (
        <div className="graphic-page">
            <GoBack onClose={onClose} />
            <h2>Graphics</h2>
            <GrpahicNav setActiveTab={setActiveTab} />
            {renderContent()}
        </div>
    )
}