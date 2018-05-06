import React, { Component } from 'react';
import AppHeader from '../Header/AppHeader'
import AppFooter from '../Footer/Footer'
import NewsMain from '../News/NewsMain'
import '../../css/news.css'

class NewsPage extends Component {

  render() {
    return (
        <div>
            <AppHeader/>
            <NewsMain/>
            <AppFooter/>
        </div>

    );
  }
}

export default NewsPage;
