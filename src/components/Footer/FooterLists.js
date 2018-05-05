import React, { Component } from 'react';
import '../../css/footer.css'
import FooterList from './FooterList.js'

class FooterLists extends Component {

  render() {
    let firstList = ['السيرة الذاتية', 'مولده و تعليمه', 'الدرجة العلمية', 'حياته قبل الازهر', 'حياته في الازهر'];
    let secondList = ['أخبار الإمام', 'اخر الاخبار', 'مقابلات مع الامام', 'مؤتمرات الازهر'];
    let thirdList = ['مؤلفات', 'مؤلفات خاصة بالإمام الاكبر', 'مؤلفات عن الامام الاكبر'];
    let fourthList = ['وسائط', 'صور', 'فيديوهات'];
    return (
          <div id="footer-lists">
            <FooterList list={firstList}/>
            <FooterList list={secondList}/>
            <FooterList list={thirdList}/>
            <FooterList list={fourthList}/>
          </div>
    );
  }
}

export default FooterLists;
