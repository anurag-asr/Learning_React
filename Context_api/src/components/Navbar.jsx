import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { CartContext } from '../Context/CartContext';
import { ThemeContext } from '../Context/ThemeContext';
import WishList from './WishList'

const Navbar = () => {
  const {isAuthorized,login,logout}=useContext(AuthContext);

  const {buy}=useContext(CartContext);

  const {isLight,toggleTheme}=useContext(ThemeContext)

  return (

    <div>
      Navbar
      <button onClick={()=>{
        if(isAuthorized) logout()//logout function make the isAuthorisezed value=false
        else login("u","p")//login function make the isAuthorized valu=true;
      }}>{isAuthorized ? "Logout" : "Login"}</button>

      <button onClick={buy}>Buy</button>
      
      <button onClick={toggleTheme}>{`Make ${isLight ? "Dark" : "Light"}`}</button>

      {isAuthorized && <WishList/>} 
    </div>

  )
}

export default Navbar