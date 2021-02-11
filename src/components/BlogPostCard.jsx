import React, { useState } from 'react'
import { Link } from 'gatsby'
import ImageHelper from './ImageHelper'

import { FaCalendar } from '@react-icons/all-files/fa/FaCalendar'
import { FaClock } from '@react-icons/all-files/fa/FaClock'

const BlogPostCard = ({ className, node }) => {
    const coverImg = node.frontmatter.cover
    const [imageHover, setImageHover] = useState(false)
    const imageScale = imageHover ? 'scale-110' : ''

    return (
        <article className={className}>
            <Link to={node.fields.slug}>
                <div
                    role="link"
                    tabIndex={0} 
                    onMouseEnter={() => setImageHover(true)}
                    onMouseLeave={() => setImageHover(false)} 
                    className="shadow-2xl rounded-xl overflow-hidden hover:bg-gray-300 transition">
                    <div className="overflow-hidden">
                        <ImageHelper className={`${imageScale} transform transition duration-300`} image={coverImg} />
                    </div>
                    <div className="p-2">
                        <h1 className="text-lg">{node.frontmatter.title}</h1>
                        <div className="text-gray-700 text-xs">{node.excerpt}</div>
                        <div className="flex justify-between mt-2 text-xs text-gray-700">
                            <div className="flex items-center"><FaCalendar className="text-base mr-1" />{node.frontmatter.post_date}</div>
                            <div className="flex items-center"> <FaClock className="text-base mr-1" /> {node.timeToRead} {node.timeToRead === 1 ? 'min' : 'mins'}</div>
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    )
}

export default BlogPostCard
