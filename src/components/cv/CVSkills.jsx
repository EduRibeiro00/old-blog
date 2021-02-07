import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

const CVSkills = ({ data }) => {
    return (
        <div>
            <h2>Skills</h2>
            {
                data.allSkillsJson.edges.map(({ node }) => (
                    <div>
                        <h3>{node.level}</h3>
                        <div className="flex">
                            {
                                node.skills.map(skill => (
                                    <div>{skill}</div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default (props) => (
    <StaticQuery 
        query={graphql`
            query {
                allSkillsJson {
                    edges {
                        node {
                            level
                            skills
                        }
                    }
                }
            }          
        `}
        render={(data) => <CVSkills data={data} {...props} />}
    />
)