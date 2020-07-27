import React from 'react'
import './style.css';
import symptoms from '../img/symptoms.png'
function Symptoms() {
    return (
        <div className="symptomps__section">
            <div className="Contagion__heading_section">
                <h2 className="contagion__sub_heading">Covid-19</h2>
                <h1 className="contagion__main_heading">Symptomps</h1>
                <p className="contagion__discription">Corona viruses are a type of virus. There are many different kinds, and some cause disease.<br/> A newly identified type has caused a recent outbreak of respiratory</p>
            </div>
            <div className="symptomps__img_section">
                <img src={symptoms} alt="symptomps" width="100%"/>
            </div>
        </div>
            
    )
}

export default Symptoms
