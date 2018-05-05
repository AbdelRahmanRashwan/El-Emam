import React, { Component } from 'react';
import ShareSection from './ShareSection.js'
import HeaderList from './HeaderList.js'
import '../css/header.css'

class AppHeader extends Component {

  render() {
    return (
      <header>
        <div className="container">
            <img id="logo" src={require("../resources/logo.png")}/>
            <HeaderList />
            <ShareSection />
        </div>
      </header>
    );
  }
}

export default AppHeader;
