import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import CVVolunteeringItem from './CVVolunteeringItem'

const CVVolunteering = ({ data }) => {
    return (
        <div id="cv-volunteering" className="mb-8">
            <h2 className="text-4xl mb-4 underline">Volunteering</h2>
            <div>
                {
                  data.allMarkdownRemark.edges.map(({ node }) => (
                    <CVVolunteeringItem key={node.id} node={node} />
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
                            cv_section: {eq: "volunteering"}
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
                                location
                            }
                            html
                        }
                    }
                }
            }
        `}
        render={(data) => <CVVolunteering data={data} {...props} />}
    />
)