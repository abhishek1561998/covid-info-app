import React from 'react'
import './style.css';
import Mask from '../img/Mask_girl.png';
import WashHand from '../img/wash_hand.png';
import Nose from '../img/use_nose.png';
import Avoidcontacts from '../img/avoid_contact.png';
function Prevention() {
    return (
        <div className="prevention__section">   
            <div className="prevention__heading_section">
                <h2 className="prevention__sub_heading">Covid-19</h2>
                <h1 className="prevention__main_heading">What  should we do</h1>
                <p className="prevention__main_discription">Corona viruses are a type of virus. There are many different kinds, and some cause<br/> disease. A newly identified type has caused</p>
            </div>

             <div className="container prevention__section__flex">
                <div className="prevention__left">
                    <h1 className="prevention__heading"><span className="prevention__count">01</span>Ware Masks</h1>
                            <p className="prevention__discription">Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively</p>
                </div>
                <div className="prevention__right">
                    <img src={Mask} alt="prevention-section-Image" width="100%" height="100%"/>
                </div>
                
             </div>

             <div className="container prevention__section__flex2">
                <div className="prevention__left">
                    <h1 className="prevention__heading"><span className="prevention__count">02</span>Wash Your Hands</h1>
                            <p className="prevention__discription">Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively</p>
                </div>
                <div className="prevention__right">
                    <img src={WashHand} alt="prevention-section-Image" width="100%" height="100%"/>
                </div>
                
             </div>

             <div className="container prevention__section__flex">
                <div className="prevention__left">
                    <h1 className="prevention__heading"><span className="prevention__count">03</span>Use nose - rag </h1>
                            <p className="prevention__discription">Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively</p>
                </div>
                <div className="prevention__right">
                    <img src={Nose} alt="prevention-section-Image" width="100%" height="100%"/>
                </div>
                
             </div>

             <div className="container prevention__section__flex2">
                <div className="prevention__left">
                    <h1 className="prevention__heading"><span className="prevention__count">04</span>Avoid contacts</h1>
                            <p className="prevention__discription">Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively</p>
                </div>
                <div className="prevention__right">
                    <img src={Avoidcontacts} alt="prevention-section-Image" width="100%" height="100%"/>
                </div>
                
             </div> 
        </div>
    )
}

export default Prevention
