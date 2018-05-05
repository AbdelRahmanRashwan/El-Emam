import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class HeaderList extends Component {

  render() {
    return (
      <ul id="header-list">
          <li className="header-li"><Link to='/Bio'>السيرة الذاتية</Link></li>
          <li className="header-li"><Link to='/Media'>أخبار الإمام</Link></li>
          <li className="header-li"><Link to='/Bio'>مؤلفات</Link></li>
          <li className="header-li"><Link to='/Media'>ميديا</Link></li>
          <li className="header-li"><Link to='/Bio'>مقولات الإمام</Link></li>
      </ul>
    );
  }
}

export default HeaderList;
