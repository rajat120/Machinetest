import React from 'react'
import "./Login.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import {  useSelector } from 'react-redux'
import { selectbasket } from './features/basketSlice';
import { useHistory } from "react-router-dom";

function Login() {
 const basketitem = useSelector(selectbasket);
 console.log(basketitem);
 
 const history = useHistory();
 const handleclick=()=>{
   history.push("/checkout");
 }

  return (
    <div className="login">
      <button className="login_btn">Login</button>
      <h4 className="login__more">More </h4>
    
      <ShoppingCartIcon  onClick={handleclick}  className="login__cart"/>
      <span  className="login__basket">{basketitem?.length}</span>
  
 
      
 
    </div>
  )
}

export default Login
