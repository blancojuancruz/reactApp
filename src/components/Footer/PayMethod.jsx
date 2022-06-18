import React from 'react'
import CreditCard from '../../assets/credito.jpg'
import './Footer.css'

export const PayMethod = () => {
  return (
    <div className='payMethod'>
      <h4>Hardware Store © - 2022</h4>
      <picture>
        <img src={CreditCard} alt='Credit Card illustration' />
      </picture>
      <p>
        Tenemos todos los métodos de pago
      </p>
    </div>
  )
}
