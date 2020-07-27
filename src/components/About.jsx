import React from 'react'
import heroImg from '../img/about-section.png';
import './style.css';
function About() {
    return (
        <div className="about__section">
            <div className="container hero-section__flex">
                <div className="hero-section">
                    <div className="hero-about-section-left">
                        <img src={heroImg} alt="hero-section-Image" width="100%" height="50%"/>
                    </div>
                    <div className="hero-about-section-right">
                        <h4 className="hero__sub-heading">What is Covid-19</h4> 
                        <h1 className="hero__main-heading">coronavirus</h1>
                        <p className="hero__discription">Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory illness now called COVID-19.Lauren Sauer, M.S., the director of operations with the Johns Hopkins Office of Critical Event Preparedness and Response</p>
                        <button className="hero__button">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
