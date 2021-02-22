import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

import "./App.css";
import Checkout from "./Checkout";

import Header from "./Header";

import Home from "./Home";



function App() {
  return (
  <div className="app">
    
    <Router>
    <Header/>
      <Switch>
      <Route exact path="/">
          <Home/>
          </Route>
      
        <Route  path="/checkout">
<Checkout/>

</Route>
  
        
      </Switch>

    </Router>
    
   
    
     </div>
         
  
  );
}

export default App;
