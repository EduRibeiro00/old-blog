import React from 'react'
import { FaExternalLinkAlt } from '@react-icons/all-files/fa/FaExternalLinkAlt'

const CVExperienceItem = ({ node }) => {
    const techsSection = node.techs && node.techs.length > 0 ?
        (
            <div className="flex">
                {
                    node.techs.map((tech) => (
                        <div>{tech}</div>
                    ))
                }
            </div>
        )
        :
        null
    
    return (
        <div>
            <h1>{node.position}</h1>
            <h2> <a href={node.company_link}>{node.company_name}<FaExternalLinkAlt /></a></h2>
            <div className="flex">
                <div>{node.start_date} - {node.end_date}</div>
                <div>{node.location}</div>
            </div>
            <ul>
                {
                    node.bullets.map((bullet) => (
                        <li>{bullet}</li>
                    ))
                }
            </ul>
            {techsSection}
        </div>
    )
}

export default CVExperienceItem