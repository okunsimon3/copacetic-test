import { use, useEffect, useRef } from 'react';
import './About.css'
import { NavIcon } from './components/NavIcon';
import EscalatorCarousel from './components/EscalatorCarousel';
import Profile from './components/Profile';
import stars from './assets/parallax/stars.webp';
import bgMountain from './assets/parallax/bg-mountains.webp';
import fgMountain from './assets/parallax/fg-mountains.webp';
import hill from './assets/parallax/hill.webp';
import flatground from './assets/parallax/flatground.webp';
import trees from './assets/parallax/trees.webp';
import parallax1 from './assets/parallax/parallax-2.webp'
import parallax2 from './assets/parallax/parallax-2_2.webp'

export default function Media() {

    const starsRef = useRef(null)
    const bgMountainRef = useRef(null);
    const fgMountainRef = useRef(null);
    const flatgroundRef = useRef(null);
    const hillRef = useRef(null);
    const treesRef = useRef(null);
    const textRef = useRef(null);
    const lastScrollY = useRef(0);
    const ticking = useRef(false);

    const imageRef = useRef(null);
    const parallaxRef = useRef(null)

    useEffect(() => {
        function updateParallax() {
            if(!starsRef.current) return;

            starsRef.current.style.transform = `translate3d(0, ${lastScrollY.current * 0.8}px, 0)`;
            bgMountainRef.current.style.transform = `translate3d(0, ${lastScrollY.current * 0.5}px, 0)`;
            textRef.current.style.transform = `translate3d(0, ${lastScrollY.current * 0.9}px, 0)`;
            fgMountainRef.current.style.transform = `translate3d(0, ${lastScrollY.current * 0.6}px, 0)`;
            flatgroundRef.current.style.transform = `translate3d(0, ${lastScrollY.current * 0.5}px, 0)`;
            hillRef.current.style.transform = `translate3d(0, ${lastScrollY.current * 0.05}px, 0)`;
            treesRef.current.style.transform = `translate3d(0, ${lastScrollY.current * 0}px, 0)`;
            parallaxRef.current.style.transform = `translate3d(0, -${lastScrollY.current * 0.4}px, 0)`;
            
            ticking.current = false;
        }

        function onScroll() {
            lastScrollY.current = window.scrollY;
            if(!ticking.current) {
                window.requestAnimationFrame(updateParallax);
                ticking.current = true;
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', onScroll, { passive: true });
        };
    }, []);


    return (
        <>
        <NavIcon />
        <section className='parallax-intro'>
            <img ref={starsRef} src={stars} id='stars'/>
            <img ref={bgMountainRef} src={bgMountain} id='bg-mountain'/>
            <h2 ref={textRef} id="text">What is Copacetic?</h2>
            <img ref={fgMountainRef} src={fgMountain} id='fg-mountain'/>
            <img ref={flatgroundRef} src={flatground} id='flatground'/>
            <img ref={hillRef} src={hill} id='hill'/>
            <img ref={treesRef} src={trees} id='trees'/>
        </section>
        <div className='parallax-container'>
            <img ref={imageRef} src={parallax1} id='parallax-bg'/>
            <img ref={parallaxRef} src={parallax2} id='france'/>
        </div>
        <EscalatorCarousel />
        <Profile />
        </>
    )
}

