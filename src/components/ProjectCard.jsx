import React from 'react'
import projects from "../projects.json"

function ProjectCard() {
    return (
        <div className='grid gap-6 md:grid-cols-2'>
            {projects.map((project, index) => (
                <div className='m-6 bg-slate-700 rounded-lg' key={index}>
                    <div className='m-2'>
                        <div className="text-xs font-bold text-sky-500">{project.name}</div>
                        <div className="mt-1 font-bold text-sky-700">
                            <a href={project.link} className='hover:underline'>
                                {project.name}
                            </a>
                        </div>
                    <div className="mt-2 text-sm text-gray-600">{project.description}</div>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default ProjectCard