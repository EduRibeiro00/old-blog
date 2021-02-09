import React from 'react'
import { FaExternalLinkAlt } from '@react-icons/all-files/fa/FaExternalLinkAlt'

const CVProjectsItem = ({ node }) => {
    const dateStr = node.frontmatter.start_date === node.frontmatter.end_date ?
    node.frontmatter.start_date
    :
    `${node.frontmatter.start_date} - ${node.frontmatter.end_date}`

    const techsSection = node.frontmatter.techs && node.frontmatter.techs.length > 0 ?
        (
            <div className="flex flex-wrap">
                {
                    node.frontmatter.techs.map((tech) => (
                        <div className="btn-blue text-sm mr-2 my-1" key={tech}>{tech}</div>
                    ))
                }
            </div>
        )
        :
        null

    const numPeople = node.frontmatter.team_size > 1 ?
        `Team of ${node.frontmatter.team_size} people`
        :
        'Individual Project'

    return (
        <div className="mb-8">
            <h1 className="mb-1 inline-block text-xl"> <a className="flex items-center" href={node.frontmatter.cv_link}><span className="mr-1">{node.frontmatter.title}</span><FaExternalLinkAlt /></a></h1>
            <div className="flex text-gray-600 text-sm italic">
                <div className="pr-2 border-r border-gray-600">{dateStr}</div>
                <div className="pl-2">{numPeople}</div>
            </div>
            <div className="mt-3" dangerouslySetInnerHTML={{ __html: node.html }} />
            {techsSection}
        </div>
    )
}

export default CVProjectsItem