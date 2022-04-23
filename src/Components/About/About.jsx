import React from 'react'
import "./About.css"

export default function About() {
    const redirect = () => {
        window.location.href="/#contact";
    }

    return (
        <div id='about' data-aos='flip-left' className='about'>
            <div className="about-title">
                <small>Get to know</small>
                <big>About Me</big>
            </div>

            <div className="about-main">
                <div className="about-img">
                    <div className="behind">
                        <img src="./about_img.jpg" alt="about_img" />
                    </div>
                </div>
                <div className="about-text">
                    <div className="about-cards">
                        <div className="card">
                            <h3>Experience</h3>
                            <p>Currently a fresher</p>
                        </div>
                        <div className="card">
                            <h3>Languages</h3>
                            <p>10+ Languages</p>
                        </div>
                    </div>
                    <div className="about-written">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt eos, provident maiores voluptas repellat tempore, id distinctio debitis cumque ipsam officia maxime esse aliquid, sit reiciendis quibusdam quos mollitia accusamus repudiandae? Odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid autem ullam ut labore.
                    </div>
                    <div className="about-buttons">
                        <button className="btn btn-primary" onClick={redirect}>Let's Talk</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
