import React, { Component } from 'react';
import '../../css/footer.css'
import BigFooter from './BigFooter.js'
import SmallFooter from './SmallFooter.js'

class Footer extends Component {

  render() {
    return (
      <footer>
          <BigFooter />
          <SmallFooter />
      </footer>
    );
  }
}

export default Footer;
