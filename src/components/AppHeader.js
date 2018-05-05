import React, { Component } from 'react';
import '../css/header.css';

class AppHeader extends Component {
  render() {
    return (
        <header>
            <div className="container">
                <img id="logo" src={require("../resources/logo.png")}/>
                <ul id="header-list">
                    <li className="header-li"><a href="piography.html">السيرة الذاتية</a></li>
                    <li className="header-li"><a href="news.html">أخبار الإمام</a></li>
                    <li className="header-li"><a href="mo2alfat.html">مؤلفات</a></li>
                    <li className="header-li"><a href="media.html">ميديا</a></li>
                    <li className="header-li"><a href="quotes.html">مقولات الإمام</a></li>
                </ul>
                <div id="share-eng">
                    <img id="share" src={require("../resources/share.png")}/>
                    <p id="english">EN</p>
                </div>
            </div>
        </header>
    );
  }
}

export default AppHeader;
