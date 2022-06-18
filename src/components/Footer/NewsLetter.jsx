import React from 'react'
import { Input, InputWrapper } from '@mantine/core'

export const NewsLetter = () => {
  return (
    <div className='newsLetter'>
      <h4>Suscribite a nuestro Newsletter</h4>
      <InputWrapper
        id='newsletterInput'
        description='Ingrese su E-Mail para recibir nuestras ultimas ofertas'
        size='lg'
      >
        <Input id='newsletterInput' placeholder='Your email' />
      </InputWrapper>
    </div>
  )
}
