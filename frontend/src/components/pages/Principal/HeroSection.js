import React from 'react';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>UNIVERSO MASCOTAS</h1>
            <p>¿Qué esperamos para?</p>
        </div>
    )
}

export default HeroSection
