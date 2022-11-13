import React from 'react';
import "./project.css";

const ProjectBlock = ({ projects }) => {

    return (
        <>
            {
                projects.map((project) => {
                    const { projectname, description, github, demo } = project;
                    return (
                        <div className="proj-block">
                            <div className="proj-title">
                                {projectname}
                            </div>
                            <div className="proj-description">
                                <i>{description}</i>
                            </div>
                            <div className="proj-link">
                                <a href={github} target="_blank" rel="noopener noreferrer"><i class='bx bxl-github'></i></a>
                                <a href={demo} target="_blank" rel="noopener noreferrer"><i class='bx bxs-binoculars'></i></a>
                            </div>
                        </div>
                    );
                }).reverse()
            }
        </>
    );
}

export default ProjectBlock;