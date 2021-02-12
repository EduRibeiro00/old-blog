import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

const CVInterests = ({ data }) => {
    return (
        <div>
            <h2 className="text-2xl mb-2 underline">Interests</h2>
            <div className="flex flex-wrap">
                {
                    data.allInterestsJson.edges.map(({ node }) => (
                        <div key={node.id} className="btn-white text-sm mr-2 my-1">{node.name}</div>
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
                            id
                            name
                        }
                    }
                }
            }          
        `}
        render={(data) => <CVInterests data={data} {...props} />}
    />
)