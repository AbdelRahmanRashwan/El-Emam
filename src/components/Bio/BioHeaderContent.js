import React, { Component } from 'react';

class BioHeaderContent extends Component {
  render() {
    return (
        <div className="header_content">    
            <img id="emam_img" src={require("../../resources/emam.png")}/>
            <img id="emam_title" src={require("../../resources/emam_title.png")}/>
        </div>
    );
  }
}

export default BioHeaderContent;
