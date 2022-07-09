import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { getDataBase } from '../../Services/Firebase/FirebaseInit'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useCartContext } from '../../Hooks/CartContextHook'
import './BuyOrder.css'
import { Link } from 'react-router-dom'

const validateField = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Por favor ingrese un nombre'
  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
    errors.name = 'El nombre solo puede contener letras y espacios'
  }

  if (!values.phone) {
    errors.phone = 'Por favor ingrese un numero valido'
  }

  if (!values.email) {
    errors.email = 'Por favor ingrese un correo valido'
  } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
    errors.email = 'El correo solo puede contener el formato Email'
  }

  return errors
}

export const BuyOrder = () => {
  const [buyOrderId, setBuyOrderId] = useState(null)
  const { cart, totalPrice, cleanCart } = useCartContext()

  const handleSubmit = async (values) => {
    const buyOrder = {
      buyer: values,
      products: cart.map(product => ({ id: product.id, name: product.productName, price: product.productPrice, stock: product.stock })),
      total: totalPrice()
    }

    const buyOrdersCollection = collection(getDataBase, 'buyOrders')
    await addDoc(buyOrdersCollection, buyOrder)
      .then((doc) => {
        setBuyOrderId(doc.id)
        cleanCart()
      })
  }

  if (buyOrderId) {
    return (
      <div className='buyOrderFinished'>
        <h2>Gracias por su compra</h2>
        <span>Su numero de orden es: {buyOrderId}</span>
        <p>Guardelo para seguimiento de su compra</p>
      </div>
    )
  }

  const handleCancelOrder = () => {
    cleanCart()
  }

  return (
    <section className='buyOrder'>
      <section className='orderHeader'>
        <h3>A continuacion, ingrese sus datos para poder generar su orden de compra</h3>
        <p>
          Le pedimos estos datos para poder comunicarnos con usted por cualquier inconveniente
        </p>
        {cart.map((product) => (
          <div key={product.id} className='productsSpecific'>
            <small>{product.productName}</small>
            <small>Cantidad: {product.count}</small>
            <small>Total: {product.productPrice * product.count}</small>
          </div>
        ))}
      </section>
      <Formik
        initialValues={{ name: '', phone: '', email: '' }}
        validate={validateField}
        onSubmit={handleSubmit}
      >
        {({ handleBlur, values }) =>
          <Form>
            <div className='inputGroup'>
              <label htmlFor='name'>Nombre</label>
              <Field
                type='text'
                id='name'
                name='name'
                values={values.name}
                onBlur={handleBlur}
              />
              <ErrorMessage name='name' component='span' className='inputError' />
            </div>
            <div className='inputGroup'>
              <label htmlFor='phone'>Telefono</label>
              <Field
                type='number'
                id='phone'
                name='phone'
                values={values.phone}
                onBlur={handleBlur}
              />
              <ErrorMessage name='phone' component='span' className='inputError' />
            </div>
            <div className='inputGroup'>
              <label htmlFor='email'>Email</label>
              <Field
                type='email'
                id='email'
                values={values.email}
                name='email'
                onBlur={handleBlur}
              />
              <ErrorMessage name='email' component='span' className='inputError' />
            </div>
            <div className='buttonsContainer'>
              <Link to='/' className='cancelBtn' onClick={handleCancelOrder}>Cancelar compra</Link>
              <button type='submit' className='buyBtn'>Generar Orden</button>
            </div>
          </Form>}
      </Formik>
    </section>
  )
}
