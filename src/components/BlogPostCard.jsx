import React from 'react'
import { Link } from 'gatsby'

import Img from "gatsby-image"
import { FaCalendar } from '@react-icons/all-files/fa/FaCalendar'
import { FaClock } from '@react-icons/all-files/fa/FaClock'

const BlogPostCard = ({ className, node }) => {
    const coverImg = node.frontmatter.cover.childImageSharp.fluid

    return (
        <article className={className}>
            <Link to={node.fields.slug}>
              <div className="shadow-2xl rounded-xl overflow-hidden hover:bg-gray-200 transition">
                  <Img fluid={coverImg} />
                  <div className="p-2">
                      <h1 className="text-lg">{node.frontmatter.title}</h1>
                      <div className="text-gray-700 text-xs">{node.excerpt}</div>
                      <div className="flex justify-between mt-2 text-xs text-gray-700">
                        <div className="flex items-center"><FaCalendar className="text-base mr-1" />{node.frontmatter.date}</div>
                        <div className="flex items-center"> <FaClock className="text-base mr-1" /> {node.timeToRead} {node.timeToRead === 1 ? 'min' : 'mins'}</div>
                      </div>
                  </div>
              </div>
            </Link>
        </article>
    )
}

export default BlogPostCard
