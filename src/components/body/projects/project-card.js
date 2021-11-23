import React from 'react'
import './project-card.css'

function ProjectCard( {project}) {
    return (
        <div className='project-card'>
            <div className='project-info'>
                <label className='project-title'>{project.title}</label>
                <p>{project.about}</p>
                <div className='project-tags'>
                    {project.tags.map(tag => {
                        return(
                            <label className='tag'>{tag}</label>
                        )
                    })}
                </div>
            </div>
            <img src={project.image} className='project-photo' />
        </div>
    )
}

export default ProjectCard
