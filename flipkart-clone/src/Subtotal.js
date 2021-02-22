import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBaskettotal, selectbasket } from './features/basketSlice'
import "./Subtotal.css"


function Subtotal() {
    const basket = useSelector(selectbasket);
    const dispatch= useDispatch();

 
   
  return (
    <div className="subtotal">
        <div className="subtotal__container">
     <h4>Subtotal {basket.length} items </h4>
    
     </div>
     
    </div>
  )
}

export default Subtotal
