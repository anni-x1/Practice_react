import './App.css';
import Cards from './Components/Cards';
import Navbar from './Components/Navbar';

import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Cards/>
      </div>
    )
  }
}

export default App

