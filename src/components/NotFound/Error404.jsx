import React from 'react'
import notFound from '../../assets/notFound.png'
import './Error404.css'

export const Error404 = () => {
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '5rem'
  }

  return (
    <div style={styles}>
      <h2>No se encontro la URL solicitada</h2>
      <picture>
        <img src={notFound} alt='Not Found Illustration' />
      </picture>
    </div>
  )
}
