import React from 'react'

function Contact() {
    return (
        <div className="contact__section">
            <div className="contact__heading_section">
                <h1 className="contact__main_heading">Have Question in mind?<br/> Let us help you</h1>
                <br/>
                <form className="contact__form">
                        <div className="contact__form_Input">
                            <input type="text" placeholder="example@gmail.com"/>
                        </div>
                            <input class="contact__button" type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default Contact
