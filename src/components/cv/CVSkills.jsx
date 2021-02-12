import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

const CVSkills = ({ data }) => {
    return (
        <div className="mb-8">
            <h2 className="text-2xl mb-2 underline">Skills</h2>
            {
                data.allSkillsJson.edges.map(({ node }) => (
                    <div key={node.id} className="mb-2">
                        <h3 className="text-sm">{node.level}</h3>
                        <div className="flex flex-wrap mt-1">
                            {
                                node.skills.map(skill => (
                                    <div key={skill} className="btn-blue text-sm mr-2 my-1">{skill}</div>
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
                            id
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