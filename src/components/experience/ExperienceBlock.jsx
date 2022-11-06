import React from 'react';
import "./experience.css";
import ExperienceBlockDescription from './ExperienceBlockDescription';

const ExperienceBlock = ({experiences}) => {

    return (
        <>
        {
            experiences.map((experience) => {
                const {timeframe, company, position, description} = experience;
                return (
                    <div className="exp-block">
                        <div className="exp-timeline">
                            {timeframe}
                        </div>
                        <div className="exp-company">
                            {company}
                        </div>
                        <div className="exp-position">
                            <i>{position}</i>
                        </div>
                        <div className="exp-description">
                            <ul>
                                <ExperienceBlockDescription descriptions={description} />
                            </ul>
                        </div>
                    </div>
                );
            })
        }
        </>
    );
}

export default ExperienceBlock;