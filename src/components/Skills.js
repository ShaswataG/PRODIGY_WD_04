import React from "react"
import skills from "../skills"

export default function Skills() {
    const skillsArray = skills.map(skill => (
        <span class="badge text-bg-secondary">{skill}</span>
    ))

    return (
        <section id="skills" className="skills">
            <h1>Skills</h1>
            <div className="skills-container">{skillsArray}</div>
        </section>
    )
}