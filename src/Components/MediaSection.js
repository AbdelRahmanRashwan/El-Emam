import React, { Component } from 'react';
import '../css/media.css'
import MediaRow from './MediaRow.js'

class MediaSection extends Component {

  render() {
    return (
      <div id="media-section">
        <MediaRow />
        <MediaRow />
        <MediaRow />
      </div>
    );
  }
}

export default MediaSection;
