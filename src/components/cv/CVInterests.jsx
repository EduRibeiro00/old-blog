import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

const CVInterests = ({ data }) => {
    return (
        <div>
            <h2 className="text-2xl mb-2 underline">Interests</h2>
            <div className="flex">
                {
                    data.allInterestsJson.edges.map(({ node }) => (
                        <div className="btn-white text-sm mr-2">{node.name}</div>
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
                allInterestsJson {
                    edges {
                        node {
                            name
                        }
                    }
                }
            }          
        `}
        render={(data) => <CVInterests data={data} {...props} />}
    />
)