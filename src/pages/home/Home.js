import React from 'react';
import Banner from './Banner';
import Projects from './Projects';
import Footer from './../shared/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default Home;