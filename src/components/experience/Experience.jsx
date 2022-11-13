import React, { useState } from 'react';
import "./experience.css";
import data from '../../assets/data/experiences';
import ExperienceBlock from './ExperienceBlock';

const Experience = () => {
    const [experiences, setExperiences] = useState(data);
    return (
        <div id='experience' className='exp background container'>
            <div className="vertical-title">
                Experience
            </div>
            <div className="content">
                <div className="exp-list">
                    <ExperienceBlock experiences={experiences} />
                </div>
            </div>
        </div>
    );
}

export default Experience;