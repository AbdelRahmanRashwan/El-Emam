import React, { Component } from 'react';
import SmallNewsItems from '../News/SmallNewsItems'
import ExtraSmallNewsItems from '../News/ExtraSmallNewsItems';

class NewsMain extends Component {

  render() {
    return (
        <main>
            {/* slider goes here */}
            <SmallNewsItems/>
            <ExtraSmallNewsItems/>          
        </main>

    );
  }
}

export default NewsMain;
