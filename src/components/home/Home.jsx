import React from 'react';
import "./home.css";
import SocialMedia from '../socialmedia/SocialMedia';
import document from '../../assets/documents/reginaliew_resume.pdf';

const Home = () => {

    return (
        <div className='home background container'>
            <div className="greeting">Hihi!</div>
            <div className="intro">I'm Regina.</div>
            <div className="description">A software engineer at <span className='company'>Accenture</span>.</div>
            <div className="resume">Check on my <a href={document} target="_blank">Resume</a></div>
            <SocialMedia />
        </div>
    );
}

export default Home;