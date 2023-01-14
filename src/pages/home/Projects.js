import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../../data/projects.json';

const Projects = () => {
    return (
        <div className='my-16'>
            <h1 className='text-5xl font-bold'>SOME OF MY PROJECTS</h1>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
                {
                    projects.map(project =>
                        <div key={project.id} className="card bg-base-100 shadow-xl">
                            <figure><img src={project.img1} alt="Project banner" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{project.name}</h2>
                                <p>{project.about}</p>
                                <div className="card-actions justify-center">
                                    <Link to={`/projects/${project.id}`}><button className="btn btn-primary">Details</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Projects;