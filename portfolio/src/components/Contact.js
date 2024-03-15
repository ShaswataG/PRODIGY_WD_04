import React from "react";
import contacts from "../contacts";

export default function Contact() {
    const contactArray = contacts.map(contact => (
        <li>
            <a target="_blank" className="text-body-secondary" href={contact.link}>
                <img src={`../images/${contact.img}`} title={contact.title} height="26px" />
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
            </div>
        </section>
    )
}