import React from 'react';
import "./experience.css";

const Experience = () => {

    return (
        <div className='exp container pl-6'>
            <div className="vertical-title">
                Experience
            </div>
            <div className="content">
                <div className="exp-list">
                    <div className="exp-block">
                        <div className="exp-timeline">
                            September 2022 - Present
                        </div>
                        <div className="exp-company">
                            <i>Accenture</i>
                        </div>
                        <div className="exp-position">
                            Application Development Associate
                        </div>
                    </div>
                    <div className="exp-block">
                        <div className="exp-timeline">
                            November 2021 - September 2022
                        </div>
                        <div className="exp-company">
                            Sunway Money Sdn Bhd
                        </div>
                        <div className="exp-position">
                            <i>Software Engineer</i>
                        </div>
                        <div className="exp-description">
                            <ul>
                                <li>Perform & conduct software testing, maintenance and support</li>
                                <li>Prepare comprehensive documentation or manual to record details of development works</li>
                            </ul>
                        </div>
                    </div>
                    <div className="exp-block">
                        <div className="exp-timeline">
                            March 2020 - October 2021
                        </div>
                        <div className="exp-company">
                            Havas Immerse Sdn Bhd
                        </div>
                        <div className="exp-position">
                            <i>Web Developer</i>
                        </div>
                        <div className="exp-description">
                            <ul>
                                <li>Web development for Sensodyne Gum and Sensitivity event and also website for internal use by using AJAX with PHP as backend.</li>
                                <li>Assist in creating Instagram AR filter using Spark AR Studio.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="exp-block">
                        <div className="exp-timeline">
                            April 2019 - June 2019 (Internship)
                        </div>
                        <div className="exp-company">
                            Infra Mobile Digital Sdn Bhd
                        </div>
                        <div className="exp-position">
                            <i>Frontend Developer</i>
                        </div>
                        <div className="exp-description">
                            Develop prototype for:  <br/>
                            <ul>
                                <li>Mobile application using React Native for comparison in performance with existing application.</li>
                                <li>Property sales web application integrate with Google Map JavaScript API to show nearby amenities.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="exp-block">
                        <div className="exp-timeline">
                            January 2016 - March 2016 (Internship)
                        </div>
                        <div className="exp-company">
                            Revenue Harvest Sdn Bhd
                        </div>
                        <div className="exp-position">
                            <i>Junior Java Programmer</i>
                        </div>
                        <div className="exp-description">
                            Develop: <br/>
                            <ul>
                                <li>Employee Claiming System using Bootstrap and Apache FreeMarker.</li>
                                <li>Website to manipulate data easily with backup and restore function using Java Framework (Dropwizard), Apache Shiro, Apache FreeMarker, JDOM, and XML</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;