import React, { Component } from 'react';
import MediaSection from './MediaSection.js'
import Slider from './Slider.js';

class Body extends Component {

  render() {
    let medias = [];
    return (
      <main>
        <Slider medias={medias}/>
        <MediaSection />
      </main>
    );
  }
}

export default Body;
