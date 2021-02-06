import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import CVExperienceItem from './CVExperienceItem'

const CVExperience = ({ data }) => {
    const nodes = data.allExperienceJson.edges
    return (
        <div>
            <h2>Experience</h2>
            <div>
                {
                  nodes.map((elem, idx) => (
                    <CVExperienceItem key={idx} node={elem.node} />
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
                allExperienceJson {
                    edges {
                        node {
                            company_link
                            company_name
                            bullets
                            end_date
                            start_date
                            position
                            techs
                            location
                        }
                    }
                }
            }
        `}
        render={(data) => <CVExperience data={data} {...props} />}
    />
)