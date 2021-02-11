import React from 'react'

import Footer from '../components/Footer'

const NotFoundPage = ({ data }) => {
  return (
    <main className="bg-gradient-to-b from-gray-900 to-blue-600 flex flex-col items-center justify-center h-screen">
		<div className="flex flex-col items-center max-w-md bg-white px-10 py-3 shadow-2xl rounded-xl">
			<h1 className="text-bold text-7xl text-center mb-3">
				404
			</h1>
			<p className="font-bold text-center">
				Hmm...this page doesn't seem to exist 🧐
			</p>
			<a className="mt-10 mb-3 btn-blue" href="/">
				Back to Main Page
			</a>
		</div>
		<div className="absolute bottom-0">
		<Footer links={data.dataJson}/>
		</div>
    </main>
  )
}

export default NotFoundPage

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
		}
	}          
`