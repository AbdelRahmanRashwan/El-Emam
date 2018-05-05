import React, { Component } from 'react';

class MediaElement extends Component {

  render() {
    return (
        <div className="media-element">
            <div className="media-image-hint">
                <img className="img-open" src={require("../../resources/image open.png")} />
            </div>
            <div className="media-text">
                قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أس
            </div>
        </div>
    );
  }
}

export default MediaElement;
