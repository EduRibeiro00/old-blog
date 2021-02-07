import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import CVExperienceItem from './CVExperienceItem'

const CVExperience = ({ data }) => {
    return (
        <div id="cv-experience">
            <h2 className="text-3xl">Experience</h2>
            <div>
                {
                  data.allMarkdownRemark.edges.map(({ node }) => (
                    <CVExperienceItem key={node.id} node={node} />
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
                            cv_section: {eq: "experience"}
                        }
                    }
                ) {
                    edges {
                        node {
                            id
                            frontmatter {
                                position
                                company_name
                                company_link
                                start_date
                                end_date
                                location
                                techs
                            }
                            html
                        }
                    }
                }
            }
        `}
        render={(data) => <CVExperience data={data} {...props} />}
    />
)