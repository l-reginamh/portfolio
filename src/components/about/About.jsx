import React from 'react';
import "./about.css";
import profile from "../../assets/images/logo.png";

const About = () => {

    return (
        <div className='about container pl-6'>
            <div className="vertical-title">
                About me
            </div>
            <div className="content">
                <div className="about-img">
                    <img src={profile} alt="Profile" />
                </div>
                <div className="about-description">
                    Hey there! My name is Regina, software engineer at <span>Accenture</span> based in Malaysia.<br/>
                    I can speak in <span>English</span>, <span>Mandarin</span>, <span>Cantonese</span>, and <span>Malay</span>. <br/>
                    <br /><br/>
                    Currently, I'm doing a refreshing on my Java knowlegde and also learning ReactJS. Besides learning programming language and frameworks, I’m also learning UIUX design occasionally.
                </div>
            </div>
            <div className="skills">
                <div className="title">
                    Skills
                </div>
                <div className="skill-list">
                    <div className="skill-item">Java, JavaScript, PHP</div>
                    <div className="skill-item">MySQL, MSSQL</div>
                    <div className="skill-item">HTML, CSS, JavaScript</div>
                    <div className="skill-item">Bootstrap, jQuery, ExpressJS, VueJS, ReactJS</div>
                    <div className="skill-item">Figma, VS Code, IntelliJ</div>
                </div>
            </div>
        </div>
    );
}

export default About;