import React from "react";

export default function Navbar() {

    return (
        <nav className="navbar">
            <div className="user">
                <img style={{height: '40px', borderRadius: '50%'}} src="../images/Portfolio logo.png"/>
                <h2>Shaswata</h2>
            </div>
            <div className="nav-container">
                <ul>
                    <li><a className="nav-link" href="#about">About</a></li>
                    <li><a className="nav-link" href="#skills">Skills</a></li>
                    <li><a className="nav-link" href="#projects">Projects</a></li>
                    <li><a className="nav-link" href="#contacts">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}