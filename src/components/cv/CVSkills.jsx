import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

const CVSkills = ({ data }) => {
    return (
        <div className="mb-8">
            <h2 className="text-2xl mb-2 underline">Skills</h2>
            {
                data.allSkillsJson.edges.map(({ node }) => (
                    <div className="mb-2">
                        <h3 className="text-sm">{node.level}</h3>
                        <div className="flex mt-1">
                            {
                                node.skills.map(skill => (
                                    <div className="btn-blue text-sm mr-2">{skill}</div>
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