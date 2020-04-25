import React from 'react';
import {Switch, Route, Link} from "react-router-dom"

import './App.css';

import HomePage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"

function App() {

  const HatsPage = () =>{
    return(
      <div>
        This is hats page
      </div>
    )
  }


  return (
    <div >
      <Route exact path='/' component={HomePage} />
      <Route  path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
