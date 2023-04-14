import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext';
import Cart from './Cart'

const Product = () => {
  const {isAuthorized,login,logout}=useContext(AuthContext);
  return (
    <div>
        Product:{isAuthorized ? "LoggedIn" : "LoggedOut"}
        <Cart/>
    </div>
  )
}

export default Product