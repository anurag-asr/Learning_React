import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const WishList = () => {
    const {count}=useContext(CartContext)
    // Here useContext is used to get the value from cartContext useContext \
    //is used to get value fro anywhere to anywhere buth the condition is you 
    //have to wrap it it uo idnide the provider function 

  return (
    <div>WishList:{count}</div>
  )
}

export default WishList