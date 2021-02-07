import React from 'react'
import { FaExternalLinkAlt } from '@react-icons/all-files/fa/FaExternalLinkAlt'

const CVVolunteeringItem = ({ node }) => {
    return (
        <div>
            <h1><a href={node.frontmatter.link}>{node.frontmatter.title}<FaExternalLinkAlt /></a></h1>
            <div className="flex">
                <div>{node.frontmatter.date}</div>
                <div>{node.frontmatter.location}</div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>
    )
}

export default CVVolunteeringItem