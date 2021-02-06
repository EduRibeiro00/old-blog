import React from 'react'
import { FaExternalLinkAlt } from '@react-icons/all-files/fa/FaExternalLinkAlt'

const CVProjectsItem = ({ node }) => {
    const techsSection = node.frontmatter.techs && node.frontmatter.techs.length > 0 ?
        (
            <div className="flex">
                {
                    node.frontmatter.techs.map((tech) => (
                        <div key={tech}>{tech}</div>
                    ))
                }
            </div>
        )
        :
        null

    return (
        <div>
            <h1><a href={node.frontmatter.link}>{node.frontmatter.title}<FaExternalLinkAlt /></a></h1>
            <div className="flex">
                <div>{node.frontmatter.start_date} - {node.frontmatter.end_date}</div>
                <div>Team of {node.frontmatter.team_size} people</div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
            {techsSection}
        </div>
    )
}

export default CVProjectsItem