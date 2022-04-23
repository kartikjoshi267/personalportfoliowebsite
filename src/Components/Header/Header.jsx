import React from 'react'
import "./Header.css"
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Header() {
  return (
    <div className='header'>
        <ul className='header-list'>
            <li className="header-listitem"><a href="https://www.linkedin.com/in/kartik-joshi-364b59225/" target="_blank" rel='noreferrer'><FaLinkedin /></a></li>
            <li className="header-listitem"><a href="https://github.com/kartikjoshi267" target='_blank' rel='noreferrer'><FaGithub /></a></li>
            <li className="header-listitem last">&nbsp;</li>
        </ul>
    </div>
  )
}
