import React from 'react'
import { BsCartFill } from 'react-icons/bs'
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa'

export const CartWidget = ({ className }) => {
  return (
    <span className={className}>
      <BsCartFill />
    </span>
  )
}

export const PlusIcon = ({ className, event }) => {
  return (
    <span className={className} onClick={event}>
      <FaPlusSquare />
    </span>
  )
}

export const NegativeIcon = ({ className, event }) => {
  return (
    <span>
      <FaMinusSquare className={className} onClick={event} />
    </span>
  )
}
