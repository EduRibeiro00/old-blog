import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import CVEducationItem from './CVEducationItem'

const CVEducation = ({ data }) => {
    const nodes = data.allMarkdownRemark.edges
    return (
        <div id="cv-education">
            <h2>Education</h2>
            <div>
                {
                  nodes.map(({ node }) => (
                    <CVEducationItem key={node.id} node={node} />
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
                            cv_section: {eq: "education"}
                        }
                    }
                ) {
                    edges {
                        node {
                            id
                            frontmatter {
                                institution_name
                                institution_link
                                course_name
                                start_date
                                end_date
                                location
                            }
                            html
                        }
                    }
                }
            }
        `}
        render={(data) => <CVEducation data={data} {...props} />}
    />
)