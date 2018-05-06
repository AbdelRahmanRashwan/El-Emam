import React, { Component } from 'react';

class MediaCard extends Component {
  render() {
    return (
        <div class="news_item_slider">
            <img class="news_image" src={require("../../resources/newsImage.png")}/>
            <div class="news_item_slider_content">
                <p class="news_item_head_line">قال فضلت الامام الكبار: ان القرآنا الكريم استعمال منذ اسلوب الاحوارمع الشباب, وليس اسلوب الملا والأمر والنهي وعرضلنا النموذجين أحدهما</p>
                <p class="time">10:00</p>
            </div>
        </div>
    );
  }
}

export default MediaCard;
