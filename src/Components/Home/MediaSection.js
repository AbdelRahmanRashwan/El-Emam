import React, { Component } from 'react';
import '../css/media.css'
import MediaRow from './MediaRow.js'

class MediaSection extends Component {

  render() {
    let data =new Array();
    for (var i =0; i<12; i++){
      data.push({'img': require('../resources/video image background.jpg'), 'description': 'قال فضيلة الإمام الأكبر: إن القرآن الكريم استعمل منذ البداية أس', 'type':'image'});
    }
    let splittedData = new Array();
    for (var i=0 ; i<data.length ; i+=4){
      if (i+4 < data.length){
        splittedData.push(data.slice(i,i+4));
      }
      else{
        splittedData.push(data.slice(i,data.length));
      }
    }
    let rows = splittedData.map(data=>{
      return(
        <MediaRow elements = {data} />
      );
    })
    return (
      <div id="media-section">
        {rows}
      </div>
    );
  }
}

export default MediaSection;
