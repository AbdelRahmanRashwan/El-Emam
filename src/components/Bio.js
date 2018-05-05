import React, { Component } from 'react';
import BioHeader from "./BioHeader";
import BioContent from "./BioContent";
import '../css/bio.css';

class Bio extends Component {
  render() {
    return (
      <div className="Bio">
        <BioHeader/>
        <BioContent/>
      </div>
    );
  }
}

export default Bio;
