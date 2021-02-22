import React from 'react'
import { useDispatch} from 'react-redux';
import "./CheckoutProduct.css"
import { basketSlice, removefromcart } from './features/basketSlice';
import Subtotal from "./Subtotal";

function CheckoutProduct({id,title,price,url}) {
 
  const dispatch = useDispatch();
const handleclick=()=>{
  dispatch(removefromcart({
    id:id,
  }));
}
  return (
    <>
    <div className="checkoutproduct">
       <img src={url} alt="" />
    <h2> {title}</h2> 
     <h4>{price}</h4>
     <button onClick={handleclick}>Remove from cart</button>
   
    
    </div>
    <Subtotal price={120}/>
    
      </>
    
    
  )
}

export default CheckoutProduct
