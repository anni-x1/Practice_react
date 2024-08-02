import './App.css';
import NewsItem from './Components/NewsItem';
import Navbar from './Components/Navbar';
import $ from 'jquery'; 
import React, { Component } from 'react'

export class App extends Component {
  render() {
    let searchD = $('#search').text();
    return (
      <div>
        <Navbar/>
        <NewsItem searchD={searchD}/>
      </div>
    )
  }
}

export default App

