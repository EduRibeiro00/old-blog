import React from 'react'
import { FaExternalLinkAlt } from '@react-icons/all-files/fa/FaExternalLinkAlt'

const CVExperienceItem = ({ node }) => {
    console.log(node.frontmatter)

    const techsSection = node.frontmatter.techs && node.frontmatter.techs.length > 0 ?
        (
            <div className="flex">
                {
                    node.frontmatter.techs.map((tech) => (
                        <div>{tech}</div>
                    ))
                }
            </div>
        )
        :
        null

    return (
        <div>
            <h1>{node.frontmatter.position}</h1>
            <h2> <a href={node.frontmatter.company_link}>{node.frontmatter.company_name}<FaExternalLinkAlt /></a></h2>
            <div className="flex">
                <div>{node.frontmatter.start_date} - {node.frontmatter.end_date}</div>
                <div>{node.frontmatter.location}</div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
            {techsSection}
        </div>
    )
}

export default CVExperienceItem