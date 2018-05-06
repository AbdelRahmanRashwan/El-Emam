import React, { Component } from 'react';
import MediaElement from './MediaElement.js'

class MediaRow extends Component {

  render() {

    return (
      <div className="media-row container">
        <MediaElement />
        <MediaElement />
        <MediaElement />
        <MediaElement />
      </div>
    );
  }
}

export default MediaRow;
