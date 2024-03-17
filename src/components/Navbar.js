import React from "react";

export default function Navbar(props) {

    let navStatus = ""
    navStatus = props.navStatus ? "hide" : "show"

    return (
        <nav className={`${navStatus} navbar`}>
            <div className="user">
                <img style={{height: '40px', borderRadius: '50%'}} src="../images/Portfolio logo.png"/>
                <h2>Shaswata</h2>
            </div>
            <div className="nav-container">
                <ul>
                    <li><a className="nav-link" href="#home">Home</a></li>
                    <li><a className="nav-link" href="#about">About</a></li>
                    <li><a className="nav-link" href="#skills">Skills</a></li>
                    <li><a className="nav-link" href="#projects">Projects</a></li>
                    <li><a className="nav-link" href="#contacts">Contact</a></li>
                </ul>
                <button style={{borderRadius: "50%", border: "0px", padding: "0px", width: "40px", height: "40px", position: "absolute", top: "330px", right: "0px"}} className="toggle-nav-button" onClick={props.toggleNav}><img width="40px" src="./images/arrow-left-circle-fill.svg  "/></button>
            </div>
        </nav>
    )
}