import React, { Component } from 'react';
import Qoutation from "./Qoutation";
import CareerTimeline from "./Timeline";
import Birth from "./Birth"
import Achievements from "./Achievements"


class BioContent extends Component {
  render() {
    return (
        <div className="content">
            
            <div className="bio">
                <div className="bio_header">
                    <label>السيرة الذاتية</label>
                    <img className="underline" src={require("../../resources/underline.png")}/>
                    
                </div>
                
                <div className="bio_content">
                    
                    <Birth />
                    
                    <CareerTimeline />
                    
                    // Positions section
                    
                    <Achievements />
                    
                </div>
            </div>
            
            <Qoutation/>
            
        </div>
    );
  }
}

export default BioContent;
