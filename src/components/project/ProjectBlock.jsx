import React from 'react';
import "./project.css";

const ProjectBlock = ({ projects }) => {

    return (
        <>
            {
                projects.map((project) => {
                    const { projectname, description, techstack, github, demo } = project;
                    return (
                        <div className="proj-block">
                            <div className="proj-title">
                                {projectname}
                            </div>
                            <div className="proj-techstack">
                                <span>Built by: </span>{techstack.map(language => language + " ")}
                            </div>
                            <div className="proj-description">
                                <i>{description}</i>
                            </div>
                            <div className="proj-link">
                                <a href={github} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
                                <a href={demo} target="_blank" rel="noopener noreferrer"><i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                        </div>
                    );
                }).reverse()
            }
        </>
    );
}

export default ProjectBlock;