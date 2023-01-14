import React from 'react';
import projects from '../../data/projects.json';
import { useParams } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const ProjectDetails = () => {
    const { id } = useParams();
    const currentProject = projects.find(project => project.id === id);
    const { name, img2, img3, img4, features, links, technologies } = currentProject;
    console.log(currentProject);
    return (
        <div>
            <h2 className='text-4xl font-bold my-8'>{name}</h2>
            <div className='grid gap-7 grid-cols-1 lg:grid-cols-2'>
                <div className="h-96 carousel carousel-vertical rounded-box">
                    <div className="carousel-item h-full">
                        <img src={img2} alt="" />
                    </div>
                    <div className="carousel-item h-full">
                        <img src={img3} alt="" />
                    </div>
                    <div className="carousel-item h-full">
                        <img src={img4} alt="" />
                    </div>
                </div>
                <div>
                    <div className='text-start'>
                        <h3 className='text-2xl font-bold'>Features</h3>
                        {
                            features.map((feature, i) => <ul key={i}>
                                <li className='list-disc'>{feature}</li>
                            </ul>)
                        }
                    </div>
                    <div className='mt-6'>
                        <h3 className='text-2xl font-bold mb-2'>Technologies</h3>
                        {
                            technologies.map((tech, i) => <button key={i} className="btn btn-sm btn-outline btn-info mr-2">{tech}</button>)
                        }
                    </div>
                    <div className='mt-6'>
                        <a href={links.liveSite} target="_blank" rel='noreferrer'>
                            <button className="btn btn-outline gap-2 mr-2">
                                <FaEye className="h-6 w-6 text-blue-500" />
                                Live
                            </button>
                        </a>
                        <a href={links.clientSide} target="_blank" rel='noreferrer'>
                            <button className="btn btn-outline gap-2 mr-2">
                                <FaGithub className="h-6 w-6 text-white" />
                                Client
                            </button>
                        </a>
                        <a href={links.serverSide} target="_blank" rel='noreferrer'>
                            <button className="btn btn-outline gap-2 mr-2">
                                <FaGithub className="h-6 w-6 text-white" />
                                Server
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;