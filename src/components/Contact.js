import React from "react";
import contacts from "../contacts";

export default function Contact() {
    const contactArray = contacts.map(contact => (
        <li>
            <a target="_blank" className="text-body-secondary" href={contact.link}>
                <img className="contact-items" src={`https://shaswatag.github.io/PRODIGY_WD_04/images/${contact.img}`} title={contact.title} height="26px" />
            </a>
        </li>
    ))
    
    return (
        <section id="contacts">
            <h1>Contact</h1>
            <div className="contacts-container">
                <ul>
                    {contactArray}
                </ul>
                <ul>
                    <li style={{marginTop: "6px", width: "100%", display: "inline-block"}}>
                            {/* <a target="_blank" className="text-body-secondary" href="tel:+917099005882"> */}
                                
                                <a target="_blank" className="" style={{color: "lightBlue"}} href="tel:+917099005882">
                                    <img className="contact-items" src={`https://shaswatag.github.io/PRODIGY_WD_04/images/telephone.svg`} title="Telephone" height="26px" />
                                    <span style={{marginLeft: "16px"}}>+91-7099005882</span>
                                </a>
                            {/* </a> */}
                    </li>    
                </ul>
            </div>
        </section>
    )
}