import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

const CVLanguages = ({ data }) => {
    return (
        <div>
            <h2>Languages</h2>
            {
                data.allLanguagesJson.edges.map(({ node }) => (
                    <div>{node.name}: {node.level}</div>
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