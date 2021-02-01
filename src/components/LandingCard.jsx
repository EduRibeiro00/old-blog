import React from 'react'

import profilePhoto from '../images/profile-photo.jpg'

const age = (birthday => {
    const today = new Date();
    const birthdate = new Date(birthday)
    let age = today.getFullYear() - birthdate.getFullYear()
    const m = today.getMonth() - birthdate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
        age--
    }
    return age
})("2000-04-04")

const LandingCard = () => {
    return (
        <div className="flex flex-col items-center max-w-md bg-white px-10 py-3 shadow-2xl rounded-xl">
            <div className="p-0 mb-2 w-1/3">
                <img src={profilePhoto} alt="Profile Photo" className="rounded-full m-0 border-4 border-blue-600" />
            </div>
            <div className="text-center mb-3">
                Hello! My name is <strong>Eduardo Ribeiro</strong>.
            </div>
            <div className="text-center">
                I am a {age} year old software engineering student, from <a href="https://www.google.com/maps/place/Porto/@41.1621217,-8.6919936,12z/data=!3m1!4b1!4m5!3m4!1s0xd2465abc4e153c1:0xa648d95640b114bc!8m2!3d41.1579438!4d-8.6291053">Porto, Portugal</a>
                , currently studying at <a href="https://sigarra.up.pt/feup/pt/web_page.inicial">FEUP</a>.
            </div>
            <div className="mt-3 px-7 flex items-center flex-wrap justify-center text-white">
                <a className="btn-blue" href="/cv">
                    CV
                </a>
                <a className="btn-blue" href="/blog">
                    Blog
                </a>
                <a className="btn-blue" href="/projects">
                    Projects
                </a>
                <a className="btn-blue" href="https://github.com/EduRibeiro00">
                    GitHub
                </a>
                <a className="btn-blue" href="https://www.linkedin.com/in/eduardo-ribeiro-a3a5b9192/">
                    LinkedIn
                </a>
            </div>
        </div>
    )
}

export default LandingCard