import React, { Component } from 'react';
import AppHeader from '../Header/AppHeader.js'
import Footer from '../Footer/Footer.js'
import Body from './Body.js'


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
