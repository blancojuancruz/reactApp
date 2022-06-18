import React from 'react'
import { FooterContact } from './FooterContact'
import { NewsLetter } from './NewsLetter'
import { PayMethod } from './PayMethod'
import './Footer.css'

export const Footer = () => {
  return (
    <section className='footerContainer'>
      <FooterContact />
      <NewsLetter />
      <PayMethod />
    </section>
  )
}
