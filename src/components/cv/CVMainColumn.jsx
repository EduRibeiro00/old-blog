import React from 'react'

import { FaUserTie } from '@react-icons/all-files/fa/FaUserTie'
import { FaGraduationCap } from '@react-icons/all-files/fa/FaGraduationCap'
import { FaLaptop } from '@react-icons/all-files/fa/FaLaptop'
import { FaHandsHelping } from '@react-icons/all-files/fa/FaHandsHelping'


import CVExperience from './experience/CVExperience'
import CVEducation from './education/CVEducation'
import CVProjects from './projects/CVProjects'
import CVVolunteering from './volunteering/CVVolunteering'

const CVMainColumn = () => {
    return (
        <div className="md:col-span-2">
            <div className="mb-5 flex justify-center items-start">
                <a className="flex items-center btn-blue mx-2 my-0" href="#cv-experience"><FaUserTie className="mr-1" /> Experience</a>
                <a className="flex items-center btn-blue mx-2 my-0" href="#cv-education"><FaGraduationCap className="mr-1" /> Education</a>
                <a className="flex items-center btn-blue mx-2 my-0" href="#cv-projects"><FaLaptop className="mr-1" /> Projects</a>
                <a className="flex items-center btn-blue mx-2 my-0" href="#cv-volunteering"><FaHandsHelping className="mr-1" /> Volunteering</a>
            </div>
            <CVExperience />
            <CVEducation />
            <CVProjects />
            <CVVolunteering />
        </div>
    )
}

export default CVMainColumn