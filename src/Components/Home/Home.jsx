import React from 'react'
import "./Home.css"

export default function Home(props) {
    const redirectToContact = () => {
        window.location.href="#contact";
    }

    const download = () => {
        window.open("https://drive.google.com/file/d/1-ECayXcr9gh0DeI8zI_d7NeQJdobnOPD/view?usp=sharing", '_blank')
        // window.location.href="https://drive.google.com/file/d/1-ECayXcr9gh0DeI8zI_d7NeQJdobnOPD/view?usp=sharing?target=_blank";
    }

    return (
        <div id='home' className='home'>
            <div className="container">
                <div className="title">
                    <small>Hello, I'm</small>
                    <big>{props.name}</big>
                    <small>Full Stack Developer</small>
                </div>
                <div className="buttons">
                    <button className="btn btn-outline-primary" onClick={download}>
                        Download CV
                    </button>
                    <button className="btn btn-primary" onClick={redirectToContact}>
                        Let's Talk
                    </button>
                </div>
                <div className="picture">
                    <img src="./assets/home_img.jpg" alt="home_img" />
                </div>
            </div>
        </div>
    )
}
