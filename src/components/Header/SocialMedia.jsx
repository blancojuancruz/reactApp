import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaLinkedin, FaTwitter, FaTwitch } from 'react-icons/fa'
import './Header.css'

export const SocialButtons = () => {
  return (
    <ul className='socialButton'>
      <li>
        <Link
          to='https://www.instagram.com/blancojuanchi/'
          className='instagram'
        >
          <FaInstagram />
        </Link>
      </li>
      <li>
        <Link
          to='https://www.linkedin.com/in/juan-cruz-blanco/'
          className='linkedin'
          about='_blank'
        >
          <FaLinkedin />
        </Link>
      </li>
      <li>
        <Link to='https://twitter.com/blancojuanchi' className='twitter'>
          <FaTwitter />
        </Link>
      </li>
      <li>
        <Link to='https://www.twitch.tv/juanchibln' className='twitch'>
          <FaTwitch />
        </Link>
      </li>
    </ul>
  )
}
