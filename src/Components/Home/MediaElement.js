import React, { Component } from 'react';

class MediaElement extends Component {

  render() {
    let data = this.props.data;
    let imgSource = require('../../resources/image open.png');
    if (data.type == 'video'){
      imgSource = require('../../resources/video play.png');
    }
    return (
        <div className="media-element">
            <div className="media-image-hint">
              <img className="img-background" src={data.img} />
              <img className="img-open" src= {imgSource}/>
            </div>
            <div className="media-text">
              {data.description}
            </div>
        </div>
    );
  }
}

export default MediaElement;
