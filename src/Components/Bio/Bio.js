import React, { Component } from 'react';
import BioHeader from "./BioHeader";
import BioContent from "./BioContent";
import Footer from "../Footer/Footer"
import '../../css/bio.css';

class Bio extends Component {
  render() {
    return (
      <div className="Bio">
        <BioHeader/>
        <BioContent/>
        <Footer/>
      </div>
    );
  }
}

export default Bio;
