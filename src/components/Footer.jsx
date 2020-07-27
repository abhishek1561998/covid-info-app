import React from 'react'
import './style.css';
import Logo from '../logo.png';
function Footer() {
    return (
        <div className="footer__section">
             <nav className="navbar">
                <div className="container navbar__flex">
                    <div className="logo">
                        <img src={Logo} alt="logo" height="50px" width="50px"/><span className="navbar__logo-text">COVID-19</span>
                    </div>
                    <div className="navbar__menu">
                        <ul className="navbar__list">
                            <li className="navbar__item">
                                <a href="#" className="navbar__link">Overview</a>
                            </li>
                            <li className="navbar__item">
                                <a href="#" className="navbar__link active">Contagion</a>
                            </li>
                            <li className="navbar__item">
                                <a href="#" className="navbar__link">Symptoms</a>
                            </li>
                            <li className="navbar__item">
                                <a href="#" className="navbar__link">Privention</a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </nav> 
        </div>
    )
}

export default Footer
