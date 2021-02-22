import React from 'react'
import { useDispatch } from 'react-redux';
import { addtobasket } from './features/basketSlice';
import "./Product.css";

function Product({title,url,price,image,id}) {
  const dispatch= useDispatch();
  const addtocart =()=>{
    dispatch(addtobasket({
      item: {
      title:title,
      url:url,
      price:price,
      id:id
      }
    }))
   

  }
  return (
    <div className="product">
        <div className="product__title">
            <h2>{title}</h2>
            <div className="product__image">
            <img src={url}  alt="" />
            
            <div className="product__price">
            {price}
           
            <img className="product__logo"
            src={image}  alt="" />
                    </div>
                    <div>
            <button onClick={addtocart} className="product__btn"> Add to cart </button>
            </div>

        </div>
           </div>
      
    </div>
  )
}

export default Product
