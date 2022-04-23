import { React, useRef } from 'react'
import "./Contact.css"
import { FaMailBulk, FaWhatsapp } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3jra9l8', 'template_ne2q1jj', form.current, 'ul5kzKTsu_AqiBR0q')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        Array.from(document.getElementById('form').children).forEach((child) => {
            child.value = "";
        })
    };

    return (
        <div id='contact' className='contact'>
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
                    <form id='form' ref={form} onSubmit={sendEmail} method="post" encType='multipart/form-data' name="EmailForm">
                        <input type="text" name="name" id="name" placeholder='Enter your name' required />
                        <input type="email" name="email" id="email" placeholder='Enter your email' required />
                        <textarea name="message" id="message" cols="30" rows="10" placeholder='Enter your message' required></textarea>
                        <button className='btn btn-primary' type="submit">Send a message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
