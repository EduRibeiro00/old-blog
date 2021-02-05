import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = props => {
    return (
        <main className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1 container py-7">
                {props.children}
            </div>
            <Footer />
        </main>
    )
}

export default Layout