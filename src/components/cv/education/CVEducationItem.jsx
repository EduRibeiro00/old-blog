import React from 'react'
import { FaExternalLinkAlt } from '@react-icons/all-files/fa/FaExternalLinkAlt'

const CVEducationItem = ({ node }) => {
    const dateStr = node.frontmatter.start_date === node.frontmatter.end_date ?
    node.frontmatter.start_date
    :
    `${node.frontmatter.start_date} - ${node.frontmatter.end_date}`

    return (
        <div className="mb-8">
            <h1 className="mb-1 inline-block text-xl"> <a className="flex items-center" href={node.frontmatter.institution_link}><span className="mr-1">{node.frontmatter.institution_name}</span><FaExternalLinkAlt /></a></h1>
            <h2>{node.frontmatter.course_name}</h2>
            <div className="mt-2 flex text-gray-600 text-sm italic">
                <div className="pr-2 border-r border-gray-600">{dateStr}</div>
                <div className="pl-2">{node.frontmatter.location}</div>
            </div>
            <div className="mt-3" dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>
    )
}

export default CVEducationItem