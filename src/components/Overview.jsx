import React from 'react'
import './style.css';
import heroImg from '../img/bnr-section.png'
function Overview() {
    return (
        <div className="overview__section">
            <div className="container hero-section__flex">
                <div className="hero-section">
                    <div className="hero-section-left">
                        <h4 className="hero__sub-heading">COVID-19 Alert</h4> 
                        <h1 className="hero__main-heading">Stay at Home quarantine <br/> To stop Corona virus</h1>
                        <p className="hero__discription">There is no specific medicine to prevent or treat coronavirus disease (COVID-19). People may need supportive care to .</p>
                        <button className="hero__button">Let Us Help</button>
                    </div>
                    
                    <div className="hero-section-right">
                        <img src={heroImg} alt="hero-section-Image" width="100%" height="50%"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview
