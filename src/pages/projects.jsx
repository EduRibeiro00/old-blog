import React from 'react'
import { graphql } from 'gatsby'
import { FaArrowDown } from '@react-icons/all-files/fa/FaArrowDown'

import SEO from '../components/SEO'
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

const Projects = ({ data }) => {
    return (
        <Layout>
            <SEO title="Projects" />
            <h1 className="text-5xl">Projects</h1>
            <p className="my-4">In this page you can see my main software projects that I've developed or contributed to in the past, or that I'm currently developing.<br/>The source code of the majority of these products is available on my <a href="https://github.com/EduRibeiro00">GitHub</a>, so make sure you check that out and maybe drop a follow 👌</p>
            <h2 className="flex items-center mt-8 mb-4 justify-center md:justify-start"><div className="mr-1">My Main Projects</div><FaArrowDown /></h2>
            <div className="flex flex-col items-center">
                {
                data.allMarkdownRemark.edges.map(({ node }) => (
                    <ProjectCard
                        key={node.id}
                        className="w-full my-5" 
                        node={node}
                    />
                ))
                }
            </div>
        </Layout>
    )
}

export default Projects

export const query = graphql`
    query {
        allMarkdownRemark(
            sort: { fields: [frontmatter___project_page_order], order: ASC },
            filter: {
                frontmatter: {
                    project: {eq: true }
                }
            }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        github_link
                        product_link
                        video_link
                        start_date
                        end_date
                        team_size
                        techs
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
                    html
                }
            }
        }
    }
`
