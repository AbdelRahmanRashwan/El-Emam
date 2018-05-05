import React, { Component } from 'react';

class Qoutation extends Component {

    
    render() {
        let qoute = "إن المسلمين صنعوا حضارة راقية قامت على العلم والمعرفة والتجربة, وسعد بها الناس شرقاََ وغرباََ, تحت ظلال هذا الدين الحنيف.";
        return (
            <div className="qoutation">
                <img id="emam_quote_img" src={require("../resources/emam in qoutation.png")}/>
                <div className="quote_container">
                    <img id="qoute_decoration" src={require("../resources/qoutation border.png")}/>
                    <p id="qoute">{qoute}</p>
                </div>
            </div>
        );
    }
}

export default Qoutation;
