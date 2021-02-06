import React from 'react'

import CVExperience from './experience/CVExperience'
import CVEducation from './education/CVEducation'
import CVProjects from './projects/CVProjects'

const CVMainColumn = () => {
    return (
        <div>
            <div>
                {/* TODO: acrescentar icons aqui */}
                <a href="#cv-experience">Experience</a>
                <a href="#cv-education">Education</a>
                <a href="#cv-projects">Projects</a>
                <a href="#cv-volunteering">Volunteering</a>
            </div>
            <CVExperience />
            <CVEducation />
            <CVProjects />
        </div>
    )
}

export default CVMainColumn