import React, { Component } from 'react';
import SmallNewsItems from '../News/SmallNewsItems'
import ExtraSmallNewsItems from '../News/ExtraSmallNewsItems';
import NewsSlider from '../News/NewsSlider';

class NewsMain extends Component {

  render() {
    return (
        <main>
            <NewsSlider/>
            <SmallNewsItems/>
            <ExtraSmallNewsItems/>          
        </main>

    );
  }
}

export default NewsMain;
