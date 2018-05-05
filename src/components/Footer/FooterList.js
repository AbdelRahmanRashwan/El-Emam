import React, { Component } from 'react';
import '../../css/footer.css'

class FooterList extends Component {

  render() {
    let list = this.props.list;
    console.log(this.props);
    let restOfList = new Array();
    for (var i = 1; i<list.length;i++){
      restOfList.push(list[i]);
    }
    let finalJobs = restOfList.map(listItem=>{
      return(
        <li className="footer-list-item">{listItem}</li>
      );
    })
    return (
      <ul class="footer-list">
          <li className="first-footer-list-item footer-list-item">{list[0]}</li>
          {finalJobs}
      </ul>
    );
  }
}

export default FooterList;
