import React from 'react'
import { useSelector } from 'react-redux';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';

import {  selectbasket } from './features/basketSlice';



function Checkout() {
  
    const cart= useSelector(selectbasket);
    console.log(cart);
    
  
  
  return (
    <div className="checkout">
     
      {
        (cart.length===0) ? "cart is empty":
        cart?.map(({item} )=>(
         
          <CheckoutProduct
          id={item?.id}
          title={item?.title}
          url={item?.url}
          price={item?.price}
          />
        )
       
        )
        }

       
        
      
     
       </div>
  )
}

export default Checkout
