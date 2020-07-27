import React from 'react'
import './header.css';
import logo from './logo.png';

const showandHide = () =>{
    var x = document.getElementById("navbar_menu");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
  } 


function header() {
    return (
        <div>
             <nav className="navbar">
                <div class="hamburger">
                    <button onClick={showandHide}>|||</button>
                </div>
                 <div className="container navbar__flex">
                    <div className="logo">
                        <img src={logo} alt="logo" height="50px" width="50px"/><span className="navbar__logo-text">COVID-19</span>
                    </div>
                    <div id="navbar_menu" className="navbar__menu">
                        <ul className="navbar__list">
                            <li className="navbar__item">
                                <a href="#" className="navbar__link">Overview</a>
                            </li>
                            <li className="navbar__item active">
                                <a href="#" className="navbar__link active">Contagion</a>
                            </li>
                            <li className="navbar__item">
                                <a href="#" className="navbar__link">Symptoms</a>
                            </li>
                            <li className="navbar__item">
                                <a href="#" className="navbar__link">Privention</a>
                            </li>
                            <button className="navbar__button">Contact</button>
                        </ul>
                    </div>
                    </div>
                </nav>
            
        </div>
    )
}

export default header
