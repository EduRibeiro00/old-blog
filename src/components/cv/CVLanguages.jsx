import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

const CVLanguages = ({ data }) => {
    return (
        <div className="mb-8">
            <h2 className="text-2xl mb-2 underline">Languages</h2>
            {
                data.allLanguagesJson.edges.map(({ node }) => (
                    <div className="text-sm"><span className="font-bold text-black">{node.name}:</span> {node.level}</div>
                ))
            }
        </div>
    )
}

export default (props) => (
    <StaticQuery 
        query={graphql`
            query {
                allLanguagesJson {
                    edges {
                        node {
                            level
                            name
                        }
                    }
                }
            }          
        `}
        render={(data) => <CVLanguages data={data} {...props} />}
    />
)