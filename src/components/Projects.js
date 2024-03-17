import React from 'react'
import projects from '../projects'
import Card from './Card'

export default function Projects(props) {
    const [projectArray, setProjectArray] = React.useState(projects)
    
    const cards = projectArray.map(project => (
        <Card img={project.img} title={project.title} text={project.description} projecturl={project.projectUrl} repo={project.repo} />
    ))

    return (
        <section id="projects" className="projects">
            <h1>Projects</h1>
            <div className='projects-container'>
                {cards}
            </div>
        </section>
    )
}