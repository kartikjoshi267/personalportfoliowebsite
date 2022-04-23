import React from 'react'
import "./Contact.css"
import { FaMailBulk, FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
    return (
        <div id='contact' data-aos='flip-left'  className='contact'>
            <div className="contact-title">
                <small>Get in Touch</small>
                <big>Contact Me</big>
            </div>

            <div className="contact-form-options">
                <div className="contact-options">
                    <div className="option">
                        <FaMailBulk />
                        <big>Email</big>
                        <small>kartikjoshi267@gmail.com</small>
                        <a href="mailto:kartikjoshi267@gmail.com" target="_blank" rel='noreferrer'>Send a message</a>
                    </div>
                    <div className="option">
                        <FaWhatsapp />
                        <big>Whatsapp</big>
                        <small>+91 9696483510</small>
                        <a href="https://wa.me/9696483510" target="_blank" rel='noreferrer'>Send a message</a>
                    </div>
                </div>

                <div className="form">
                    <form action="mailto:kartikjoshi267@gmail.com" method="post" encType='multipart/form-data' name="EmailForm">
                        <input type="text" name="name" id="name" placeholder='Enter your name' required/>
                        <input type="email" name="email" id="email" placeholder='Enter your email' required/>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder='Enter your message' required></textarea>
                        <button className='btn btn-primary' type="submit">Send a message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
