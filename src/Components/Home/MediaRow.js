import React, { Component } from 'react';
import MediaElement from './MediaElement.js'

class MediaRow extends Component {

  render() {
    let elements = this.props.elements;
    let elementsRow = elements.map(element=>{
      return(
        <MediaElement data = {element} />
      );
    })
    return (
      <div className="media-row container">
        {elementsRow}
      </div>
    );
  }
}

export default MediaRow;
