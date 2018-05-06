import React, { Component } from 'react';
import '../../css/footer.css'
import FooterLists from './FooterLists.js'

class BigFooter extends Component {

  render() {
    return (
      <div className="container" id="big-footer">
          <img id="footer-logo" src={require("../../resources/logo.png")}/>
          <FooterLists />
      </div>

    );
  }
}

export default BigFooter;
