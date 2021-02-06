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
                  nodes.map((elem, idx) => (
                    <CVEducationItem key={idx} node={elem.node} />
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
                    sort: { fields: [frontmatter___order], order: DESC },
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
                                title
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