import React from 'react'
import Air_transmission from '../img/air_transmission.png';
import avoid_contact from '../img/avoid_contact.png';
import humen_contact from '../img/humen_contact.png';
import './style.css';
function Contagion() {
    return (
        <div className="Contagion__section">
            <div className="Contagion__heading_section">
                <h2 className="contagion__sub_heading">Covid-19</h2>
                <h1 className="contagion__main_heading">Contagion</h1>
                <p className="contagion__discription">Corona viruses are a type of virus. There are many different kinds, and <br/> some cause disease. A newly identified type </p>
            </div>
            <br/>
            <div className="Contagion__row_icon_box">
                <div className="Contagion__icon_box active">
                    <div className="Contagion__icon">
                        <img src={Air_transmission} height="100px" alt=""/>
                    </div>
                    <h1 className="contagion__box_heading">Air Transmission</h1>
                    <p className="contagion__box_description">Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify</p>
                </div>
                <div className="Contagion__icon_box">
                    <div className="Contagion__icon">
                        <img src={humen_contact} height="100px" alt=""/>
                    </div>
                    <h1 className="contagion__box_heading">Human Contacts</h1>
                    <p className="contagion__box_description">Washing your hands is one of thesimplest ways you can protect.</p>
                </div>
                <div className="Contagion__icon_box">
                    <div className="Contagion__icon">
                        <img src={avoid_contact} height="100px" alt=""/>
                    </div>
                    <h1 className="contagion__box_heading">Containted Objects</h1>
                    <p className="contagion__box_description">Use the tissue while sneezing,In this way, you can protect your droplets.</p>
                </div>
            </div>
        </div>
    )
}

export default Contagion
