import React, { Component } from 'react';

class Birth extends Component {
    
    render() {
        let birth_and_history = this.props.birth.birth_and_history;
        return (
            <div className="birth section">
                <img id="emam_bio_image" src={require("../../resources/newsImage.png")}/>

                <img className="decoration" src={require("../../resources/section_decoration.png")}/>

                <label className="section_label">مولده ونشأته</label>
                <p className="white_p">{birth_and_history}</p>

            </div>
        );
    }
}

export default Birth;
