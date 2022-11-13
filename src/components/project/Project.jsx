import React, { useState } from 'react';
import "./project.css";
import data from '../../assets/data/projects';
import ProjectBlock from './ProjectBlock';

const Project = () => {
    const [projects, setProjects] = useState(data);
    return (
        <div id='project' className='proj background container'>
            <div className="vertical-title">
                Project
            </div>
            <div className="content">
                <div className="project-list">
                    <ProjectBlock projects={projects} />
                </div>
            </div>
        </div>
    );
}

export default Project;