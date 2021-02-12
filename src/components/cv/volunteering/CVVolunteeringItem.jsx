import React from 'react'

const CVVolunteeringItem = ({ node }) => {
    const dateStr = node.frontmatter.start_date === node.frontmatter.end_date ?
    node.frontmatter.start_date
    :
    `${node.frontmatter.start_date} - ${node.frontmatter.end_date}`

    return (
        <div className="mb-8">
            <h1 className="mb-1 inline-block text-xl"> <a className="flex items-center" href={node.frontmatter.link}>{node.frontmatter.title}</a></h1>
            <div className="flex text-gray-600 text-sm italic">
                <div className="pr-2 border-r border-gray-600">{dateStr}</div>
                <div className="pl-2">{node.frontmatter.location}</div>
            </div>
            <div className="mt-3" dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>
    )
}

export default CVVolunteeringItem