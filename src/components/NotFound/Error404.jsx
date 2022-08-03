import React from 'react'
import notFound from '../../assets/notFound.png'

const styles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '5rem'
}

export const Error404 = () => {
  return (
    <section style={styles}>
      <h2>No se encontro la URL solicitada</h2>
      <picture>
        <img src={notFound} alt='Imagen que aparece cuando se escribe una ruta invalida' />
      </picture>
    </section>
  )
}
