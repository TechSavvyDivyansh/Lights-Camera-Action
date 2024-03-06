import React from 'react'
import './Footer.css'
import logo from '../assets/logo.png'
import tickets from '../assets/footerTickets.png'

export default function Footer() {
  return (
    <div className='footer'>
        <img src={logo} alt="" />
        <ul className='footer-links'>
          <li><img src={tickets} alt="" /></li>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>NEWSLETTER</li>
          <li>CONTACT</li>
        </ul>
        <hr />
        <p>COPYRIGHT-<span>@ALL RIGHTS RESERVED</span></p>
    </div>
  )
}
