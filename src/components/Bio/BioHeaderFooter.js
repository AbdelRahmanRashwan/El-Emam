import React, { Component } from 'react';

class BioHeaderFooter extends Component {
  render() {
      let briefHistory = "ولد في مدينة ام القويين بتاريخ 1952/10/01 م ,متزوج من كريمة صاحب السمو الشيخ/ صقر بن محمد القاسمي";
    return (
        <div className="header_footer">
            <div className="footer-b">
                <img id="emam_name" src={require("../../resources/alEmam.png")}/>
            </div>
            <div className="brief_history">
                <img id="brief_history_frame" src={require("../../resources/frame.png")}/>
                <p id="history_text">{briefHistory}</p>
            </div>      
        </div>
    );
  }
}

export default BioHeaderFooter;
