import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../asset/rayhan.jpg';

const About = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
                <img src={image} alt="Hachin Rayhan" className="rounded-full" />
                <div>
                    <h1 className="text-5xl font-bold">About Me</h1>
                    <p className="py-6 text-start">
                        I am a full-stack web developer. I have always been fascinated by the potential of technology. I enjoy learning new technologies. I developed several projects with React, Express, NodeJs and MongoDB. <br />
                        Currently, I am looking for a position as a front-end, full-stack, or MERN-stack developer. By joining a web development team I want to contribute to build great products.
                    </p>
                    <Link to={'/files/Hachin Rayhan.pdf'} target="_blank" download>
                        <button className="btn btn-primary">Download Resume</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;