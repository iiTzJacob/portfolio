import React from 'react'
import projects from "../projects.json"

function ProjectCard() {
    return (
        <div className='grid gap-6 md:grid-cols-2'>
            {projects.map((project, index) => (
                <div className='m-6 bg-cardbg rounded-lg shadow-glow' key={index}>
                    <div className='m-2'>

                        <div className="mt-1 font-bold text-offwhite">
                            <a href={project.link} className='hover:underline'>
                                {project.name}
                            </a>
                        </div>
                    <div className="mt-2 text-sm text-offwhite">{project.description}</div>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default ProjectCard