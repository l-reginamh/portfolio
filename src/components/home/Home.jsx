import React from 'react';
import "./home.css";

const Home = () => {

    return (
        <div className='home container pl-6'>
            <div className="greeting">Hihi!</div>
            <div className="intro">I'm Regina.</div>
            <div className="description">A software engineer at <span>Accenture</span>.</div>
            <div className="resume">Check on my <a href="#resume">Digital Resume</a></div>
        </div>
    );
}

export default Home;