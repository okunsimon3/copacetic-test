import ImageCarousel from './ImageCarousel'
import './Magazines.css'
import dellPaper from '../assets/dellah2pager.png'
import dellVison from '../assets/Dellvison.png'
import dellPaper2 from '../assets/dellah2pager2.png'
import dellLove from '../assets/Abdellah_Love.jpeg'
import dellPlay from '../assets/PlayingGames1.jpeg'
import dellPlay2 from '../assets/PlayingGames2.jpeg'
import hope from '../assets/HOPE.jpeg'
import dellPlay3 from '../assets/PlayingGames3.png'


const imageSets = [
    [dellVison, dellPaper, dellPaper2],
    [dellLove, dellPlay, dellPlay2],
    [hope, dellPlay3],
];

export default function Magazines() {
    return (
        <div className="carousel-grid">
            {imageSets.map((images, idx) => (
                <ImageCarousel key={idx} images={images} />
            ))}
        </div>
    )
}