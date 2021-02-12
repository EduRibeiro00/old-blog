import React from 'react'

const CVExperienceItem = ({ node }) => {
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

    return (
        <div className="mb-8">
            <h1 className="mb-1 text-2xl">{node.frontmatter.position}</h1>
            <h2 className="inline-block text-lg"> <a className="flex items-center" href={node.frontmatter.company_link}>{node.frontmatter.company_name}</a></h2>
            <div className="mt-1 flex text-gray-600 text-sm italic">
                <div className="pr-2 border-r border-gray-600">{dateStr}</div>
                <div className="pl-2">{node.frontmatter.location}</div>
            </div>
            <div className="mt-2" dangerouslySetInnerHTML={{ __html: node.html }} />
            {techsSection}
        </div>
    )
}

export default CVExperienceItem