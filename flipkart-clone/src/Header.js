import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import Login from './Login';



function Header() {
  return (
    <div className="header">
    
   <img  src="https://www.searchpng.com/wp-content/uploads/2019/01/Flipart-Logo-Icon-PNG-Image.png" alt="flipkart-logo" />
   
            <div className="header__search">
            <input className="header__input" placeholder="search for products,brands and more" />
            <SearchIcon className="header__searchIcon"/>
            </div>
           <Login/>
          
      </div>
       
         
          
        
           
  )
}

export default Header
