import React from 'react'
import "./Footer.css"
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='footer'>
        <h5>Kartik Joshi</h5>
        <div className="footer-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
        </div>

        <div className="footer-social-handles">
            <a href="https://www.facebook.com/kartik.joshi.7330/" target="_blank" rel='noreferrer'><FaFacebook /></a>
            <a href="https://twitter.com/KartikJ74422563" target="_blank" rel='noreferrer'><FaTwitter /></a>
            <a href="https://www.instagram.com/kartikjoshi267/" target="_blank" rel='noreferrer'><FaInstagram /></a>
        </div>

        <div className="copyright">
            <p>{new Date().getFullYear()} &#169; Kartik Joshi | All Rights Reserved</p>
        </div>
    </div>
  )
}
