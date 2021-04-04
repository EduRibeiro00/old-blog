import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/SEO'
import LandingCard from '../components/LandingCard'
import Footer from '../components/Footer'


const LandingPage = ({ data }) => {
	return (
		<main className="bg-gradient-to-b from-gray-900 to-blue-600 flex flex-col items-center justify-center h-screen">
			<SEO title="Welcome!" />
			<LandingCard links={data.dataJson} />
			<div className="absolute bottom-0">
			<Footer links={data.dataJson} />
			</div>
		</main>
	)
}

export default LandingPage

export const query = graphql`
	query {
		dataJson {
			email {
				link
			}
			github {
				link
			}
			linkedin {
				link
			}
			dev {
				link
			}
			medium {
				link
			}
		}
	}          
`