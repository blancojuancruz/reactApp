import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter, FaTwitch } from 'react-icons/fa'
import './Header.css'

export const SocialButtons = () => {
  return (
    <ul className='socialButton'>
      <li>
        <a
          target='_blank'
          href='https://www.instagram.com/blancojuanchi/'
          className='instagram' rel='noreferrer'
        >
          <FaInstagram />
        </a>
      </li>
      <li>
        <a
          href='https://www.linkedin.com/in/juan-cruz-blanco/'
          className='linkedin'
          target='_blank' rel='noreferrer'
        >
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href='https://twitter.com/blancojuanchi' className='twitter' target='_blank' rel='noreferrer'>
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href='https://www.twitch.tv/juanchibln' className='twitch' target='_blank' rel='noreferrer'>
          <FaTwitch />
        </a>
      </li>
    </ul>
  )
}
