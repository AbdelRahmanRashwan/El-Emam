import React, { Component } from 'react';
import './App.css';
import AppHeader from './Components/AppHeader.js'
import Footer from './Components/Footer.js'
import Body from './Components/Body.js'


class App extends Component {
  render() {
    return (
      <div id = 'hamada'>
        <AppHeader />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
