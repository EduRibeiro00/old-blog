import React from 'react'

import CVLanguages from './CVLanguages'
import CVCertificates from './CVCertificates'
import CVSkills from './CVSkills'
import CVInterests from './CVInterests'

const CVSidebar = () => {
    return (
        <div>
            <CVLanguages />
            <CVCertificates />
            <CVSkills />
            <CVInterests />
        </div>
    )
}

export default CVSidebar