import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import CVProjectsItem from './CVProjectsItem'

const CVProjects = ({ data }) => {
    return (
        <div id="cv-projects" className="mb-8">
            <h2 className="text-4xl mb-4 underline">Projects</h2>
            <h3 className="text-lg mb-6">A more extensive list of my projects can be found <a href="/projects">here</a>.</h3>
            <div>
                {
                   data.allMarkdownRemark.edges.map(({ node }) => (
                    <CVProjectsItem key={node.id} node={node} />
                  ))
                }
            </div>
        </div>
    )
}

export default (props) => (
    <StaticQuery 
        query={graphql`
            query {
                allMarkdownRemark(
                    sort: { fields: [frontmatter___order], order: ASC },
                    filter: {
                        frontmatter: {
                            cv_section: {eq: "projects"}
                        }
                    }
                ) {
                    edges {
                        node {
                            id
                            frontmatter {
                                title
                                link
                                start_date
                                end_date
                                team_size
                                techs
                            }
                            html
                        }
                    }
                }
            }
        `}
        render={(data) => <CVProjects data={data} {...props} />}
    />
)