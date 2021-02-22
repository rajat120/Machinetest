import React from 'react'
import Product from './Product'
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home_product">
             <Product
            title="Voice Bot"
            url="data:image/jpeg;base64,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"
            price="$ 20"
            id="1"
           

            />
           <Product
            title="Echo"
            url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkBBWykO8trXgyKiUC-wgQEO6MpkweOktK2g&usqp=CAU"
            price="$ 12"
           id="2"

            />
             <Product 
            title="Shooting Video Camera"
            url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxAxDDp5VU7zEqn-kV4EcSUHVeuSxSUSbJ1A&usqp=CAU"
            price="$ 12"
            id="3"

            />
            </div>
           

             <div className="home_product">
             <Product
            title="Persoanl Kit"
            url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBqzu4SkrE024PQcOOE1eDzXMs3wjiXDvoOQ&usqp=CAU"
            price="$ 40"
            id="4"

            />
           <Product
            title="ImageInfographics"
            url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSim_ljLK3kb37WkoW0PPRzqBjx4BubWuQ3g&usqp=CAU"
            price="$ 12"
            id="5"

            />
           
            
            </div>
          
    </div>
  )
}

export default Home
