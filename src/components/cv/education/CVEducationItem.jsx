import React from 'react'
import { FaExternalLinkAlt } from '@react-icons/all-files/fa/FaExternalLinkAlt'

const CVEducationItem = ({ node }) => {
    return (
        <div>
            <h1><a href={node.frontmatter.institution_link}>{node.frontmatter.institution_name}<FaExternalLinkAlt /></a></h1>
            <h2>{node.frontmatter.course_name}</h2>
            <div className="flex">
                <div>{node.frontmatter.start_date} - {node.frontmatter.end_date}</div>
                <div>{node.frontmatter.location}</div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>
    )
}

export default CVEducationItem