import React from 'react'
import "./Experience.css"
import { FaCheckCircle } from 'react-icons/fa'

export default function Experience() {
    return (
        <div id='experience' className='experience'>
            <div className="experience-title">
                <small>What Skills I have</small>
                <big>My Experience</big>
            </div>

            <div className="experience-skills">
                <div className="skill">
                    <h3>Frontend Development</h3>
                    <ul className="skill-list">
                        <li><FaCheckCircle /> &nbsp;HTML <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Experienced</li>
                        <li><FaCheckCircle /> &nbsp;Javascript <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Intermediate</li>
                        <li><FaCheckCircle /> &nbsp;CSS3 <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Experienced</li>
                        <li><FaCheckCircle /> &nbsp;React <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Basic</li>
                        <li><FaCheckCircle /> &nbsp;Bootstrap <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Experienced</li>
                    </ul>
                </div>
                <div className="skill">
                    <h3>Backend Development</h3>
                    <ul className="skill-list">
                        <li><FaCheckCircle /> &nbsp;NodeJS <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Intermediate</li>
                        <li><FaCheckCircle /> &nbsp;MySQL <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Experienced</li>
                        <li><FaCheckCircle /> &nbsp;MongoDB <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Basic</li>
                        <li><FaCheckCircle /> &nbsp;PHP <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Basic</li>
                        <li><FaCheckCircle /> &nbsp;Python <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Experienced</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
