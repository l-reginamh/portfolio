import React from 'react';
import "./about.css";
import profile from "../../assets/images/profile.png";

const About = () => {

    return (
        <div id='about' className='about background container'>
            <div className="vertical-title">
                About me
            </div>
            <div className="content">
                <div className="about-img">
                    <img src={profile} alt="Profile" />
                </div>
                <div className="about-description">
                    <br/><br/>
                    Hey there! My name is Regina, software engineer at <span className='company'>Accenture</span> based in Malaysia.<br/>
                    I can speak in <span className='primary'>English</span>, <span className='secondary'>Mandarin</span>, <span className='secondary'>Cantonese</span>, and <span className='tertiary'>Malay</span>. My favourite activities are singing and doing handicraft.<br/>
                    <br /><br/>
                    Currently, I'm doing a refreshing on my Java knowlegde and also learning ReactJS. Besides learning programming language and frameworks, I'm also learning UIUX design occasionally.
                </div>
            </div>
            <div className="skills">
                <div className="title">
                    Skills
                </div>
                <div className="skill-list">
                    <div className="skill-row row-1">
                        <div className="skill-item">Java, JavaScript, PHP</div>
                        <div className="skill-item">MySQL, MSSQL</div>
                    </div>
                    <div className="skill-row row-2">
                        <div className="skill-item">HTML, CSS, JavaScript</div>
                        <div className="skill-item">Bootstrap, jQuery, ExpressJS, VueJS, ReactJS</div>
                    </div>
                    <div className="skill-row row-3">
                    <div className="skill-item">Figma, VS Code, IntelliJ</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;