import React, { Component } from 'react';
import ErrorHeader from './ErrorHeader'
import ErrorMain from './ErrorMain'
import ErrorFooter from './ErrorFooter'

import '../../css/404-style.css'


class PageNotExist extends Component {

  render() {
    return (
        <div>
            <ErrorHeader/>
            <ErrorMain/>
            <ErrorFooter/>
        </div>
    );
  }
}

export default PageNotExist;
