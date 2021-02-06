import React from 'react'

import CVExperience from './experience/CVExperience'

const CVMainColumn = ({title, link}) => {
    return (
        <div>
            <div>
                {/* TODO: acrescentar icons aqui */}
                <a href="#experience">Experience</a>
                <a href="#education">Education</a>
                <a href="#projects">Projects</a>
                <a href="#volunteering">Volunteering</a>
            </div>
            <CVExperience />
        </div>
    )
}

export default CVMainColumn