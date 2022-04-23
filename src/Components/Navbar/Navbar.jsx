import React from 'react'
import "./Navbar.css"
import { FaHome, FaUserAlt, FaBook, FaSms } from 'react-icons/fa'

export default function Navbar() {
  return (
    <div className='navbar'>
        <ul className='navbar-list'>
            <li className="navbar-listitem"><a href="#home"><FaHome /></a></li>
            <li className="navbar-listitem"><a href="#about"><FaUserAlt /></a></li>
            <li className="navbar-listitem"><a href="#experience"><FaBook /></a></li>
            <li className="navbar-listitem"><a href="#contact"><FaSms /></a></li>
        </ul>
    </div>
  )
}
