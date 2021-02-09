import React from 'react'
import { graphql } from "gatsby"
import ImageHelper from '../components/ImageHelper'

import { FaCalendar } from '@react-icons/all-files/fa/FaCalendar'
import { FaClock } from '@react-icons/all-files/fa/FaClock'

import Layout from '../components/Layout'


const BlogPost = ({ data }) => {
    const post = data.markdownRemark
    const coverImg = post.frontmatter.cover

    return (
        <Layout>
			<div className="w-1/2 rounded-2xl overflow-hidden m-auto">
				<ImageHelper image={coverImg} />
			</div>
            <h1 className="mt-5 text-center text-5xl">{post.frontmatter.title}</h1>
            <div className="flex justify-center mt-3 text-xs">
				<div className="flex items-center mx-2"><FaCalendar className="text-base mr-1" />{post.frontmatter.post_date}</div>
				<div className="flex items-center mx-2"> <FaClock className="text-base mr-1" /> {post.timeToRead} {post.timeToRead === 1 ? 'min' : 'mins'}</div>
            </div>
            <div className="mt-8 mb-4 my-5" dangerouslySetInnerHTML={{ __html: post.html }} />
        </Layout>
    )
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
		html
		timeToRead
		frontmatter {
			title
			post_date(formatString: "DD MMMM, YYYY")
			cover {
				childImageSharp {
					fluid(maxWidth: 800) {
						...GatsbyImageSharpFluid
					}
				}
				publicURL
				extension
			}
        }
    }
  }
`