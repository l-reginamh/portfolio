import React from 'react';
import "./experience.css";

const ExperienceBlockDescription = ({descriptions}) => {

    return (
        <>
        {
            descriptions.map((description) => {
                return (
                    <li>{description}</li>
                );
            })
        }
        </>
    );
}

export default ExperienceBlockDescription;