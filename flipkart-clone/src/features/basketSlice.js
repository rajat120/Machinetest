import { createSlice } from '@reduxjs/toolkit';


export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    basket: [],
  },

  

  reducers: {
   
     addtobasket: (state, action )=> {
      console.log(action);
     state.basket = [...state.basket, action.payload];

          },
          removefromcart:(state,action)=>{
            console.log(action);
            let newbasket= [...state.basket];
            const index= state.basket.findIndex(basketitem =>(
              basketitem.id===action.id
));
          if(index>=0){
        newbasket.splice(index,1);
         

          }

          else{
            console.log("error");
          }
 state.basket=[ ...newbasket];
          }
        
         
      },
      

    
      
    },
  
  
  
);

export const {addtobasket,removefromcart,getBaskettotal} = basketSlice.actions;




export const selectbasket = state => state.basket.basket;

export default basketSlice.reducer;
