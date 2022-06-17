import React from 'react'
import { SocialButtons } from './SocialMedia'
import { CartWidget } from '../Buttons/MyIcons/Icons'
import { Button } from '../Buttons/Buttons'
import { LogInModal } from './LogInModal/LogInModal'
import { FaSearch } from 'react-icons/fa'
import logo from '../../components/images/logo.jpg'
import './Header.css'

export const Header = () => {
  return (
    <header className='headerContainer'>
      <picture className='logoContainer'>
        <img src={logo} alt='Company Logo' className='imgResponsive' />
      </picture>
      <div className='searchContainer'>
        <input type='text' placeholder='Busca tu producto aqui!' />
        <Button btnTxt={<FaSearch />} className='searchBtn' />
      </div>
      <section className='separateSection'>
        <SocialButtons />
        <div className='userSection'>
          <LogInModal />
          <span>
            <CartWidget className='cartIcon' />
          </span>
        </div>
      </section>
    </header>
  )
}
