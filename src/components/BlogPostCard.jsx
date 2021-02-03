import React from 'react'
import { graphql } from 'gatsby'
// import Img from "gatsby-image"

import LittleMePhoto from '../articles/images/little_me.jpg'

const BlogPostCard = ({className, node, data}) => {
    return (
        <article className={className}>
            <div className="shadow-2xl rounded-xl overflow-hidden hover:bg-gray-200 transition">
                <img className="w-full m-0" src={LittleMePhoto} alt="Blog post Photo"/>
                <div className="p-2">
                    <h1>{node.frontmatter.title}</h1>
                    <div class="mt-2 text-xs text-gray-700">{node.frontmatter.date}</div>
                </div>
            </div>
        </article>
    )
}

export default BlogPostCard

export const query = graphql`
  query($cover: String!) {
    file(relativePath: { eq: $cover }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`