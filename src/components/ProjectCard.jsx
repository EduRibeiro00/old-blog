import React from 'react'
import ImageHelper from './ImageHelper'

import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaPlay } from '@react-icons/all-files/fa/FaPlay'
import { FaLaptop } from '@react-icons/all-files/fa/FaLaptop'

const BlogPostCard = ({ className, node }) => {
    const coverImg = node.frontmatter.cover

    const dateStr = node.frontmatter.start_date === node.frontmatter.end_date ?
    node.frontmatter.start_date
    :
    `${node.frontmatter.start_date} - ${node.frontmatter.end_date}`

    const techsSection = node.frontmatter.techs && node.frontmatter.techs.length > 0 ?
        (
            <div className="mt-auto flex flex-wrap">
                {
                    node.frontmatter.techs.map((tech) => (
                        <div className="btn-white text-xs mr-2 my-1" key={tech}>{tech}</div>
                    ))
                }
            </div>
        )
        :
        null

    const githubLink = node.frontmatter.github_link ?
        (
            <a className="flex items-center btn-blue mr-3 my-2" href={node.frontmatter.github_link}>
                <FaGithub className="mr-1" /> GitHub
            </a>
        )
        :
        null

        
    const productLink = node.frontmatter.product_link ?
        (
            <a className="flex items-center btn-blue mr-3 my-2" href={node.frontmatter.product_link}>
                <FaLaptop className="mr-1" /> Project Link
            </a>
        )
        :
        null

    const videoLink = node.frontmatter.video_link ?
        (
            <a className="flex items-center btn-blue mr-3 my-2" href={node.frontmatter.video_link}>
                <FaPlay className="mr-1" /> Video
            </a>
        )
        :
        null

    const numPeople = node.frontmatter.team_size > 1 ?
        `Team of ${node.frontmatter.team_size} people`
        :
        'Individual Project'

    return (
        <article className={className}>
            <div className="flex flex-col lg:flex-row shadow-2xl rounded-xl overflow-hidden">
                <ImageHelper className="max-h-60 lg:max-h-full w-auto lg:h-auto lg:w-1/3" image={coverImg} />
                <div className="flex flex-col justify-between w-auto lg:h-auto lg:w-2/3 p-3">
                    <div>
                        <h1 className="text-lg">{node.frontmatter.title}</h1>
                        <div className="mt-1 flex text-gray-600 text-xs italic">
                            <div className="pr-2 border-r border-gray-600">{dateStr}</div>
                            <div className="pl-2">{numPeople}</div>
                        </div>
                        <div className="mt-3 text-xs" dangerouslySetInnerHTML={{ __html: node.html }} />
                    </div>
                    <div>
                        {techsSection}
                        <div className="text-sm flex flex-wrap mt-2">
                            {githubLink}
                            {productLink}
                            {videoLink}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default BlogPostCard
