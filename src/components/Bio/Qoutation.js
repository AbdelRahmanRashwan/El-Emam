import React, { Component } from 'react';

class Qoutation extends Component {

    
    render() {
        let qoute = this.props.qoutation;
        return (
            <div className="qoutation">
                <img id="emam_quote_img" src={require("../../resources/emam in qoutation.png")}/>
                <div className="quote_container">
                    <img id="qoute_decoration" src={require("../../resources/qoutation border.png")}/>
                    <p id="qoute">{qoute}</p>
                </div>
            </div>
        );
    }
}

export default Qoutation;
