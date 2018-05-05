import React, { Component } from 'react';
import '../css/header.css'

class HeaderList extends Component {

  render() {
    return (
      <ul id="header-list">
          <li className="header-li"><a href="piography.html">السيرة الذاتية</a></li>
          <li className="header-li"><a href="news.html">أخبار الإمام</a></li>
          <li className="header-li"><a href="mo2alfat.html">مؤلفات</a></li>
          <li className="header-li"><a href="media.html">ميديا</a></li>
          <li className="header-li"><a href="quotes.html">مقولات الإمام</a></li>
      </ul>
    );
  }
}

export default HeaderList;
