import React, { Component } from 'react';
import AppHeader from "../Header/AppHeader"
import BioHeaderContent from "./BioHeaderContent"
import BioHeaderFooter from "./BioHeaderFooter"

class BioHeader extends Component {
  render() {
    return (
        <div className="Bio-header">
            <AppHeader className="App-header"/>
            <BioHeaderContent />
            <BioHeaderFooter />
        </div>
    );
  }
}

export default BioHeader;
