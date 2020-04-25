import React from 'react';
import {Switch, Route, Link} from "react-router-dom"

import './App.css';

import HomePage from "./pages/homepage/homepage.component"


function App() {

  const HatsPage = () =>{
    return(
      <div>
        This is hats page
      </div>
    )
  }


  return (
    <div className="App">
      <Route  path='/' component={HomePage} />
      <Route  path='/hats' component={HatsPage} />
    </div>
  );
}

export default App;
