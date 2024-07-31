import './App.css';
import NewsItem from './Components/NewsItem';
import Navbar from './Components/Navbar';

import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <NewsItem/>
      </div>
    )
  }
}

export default App

