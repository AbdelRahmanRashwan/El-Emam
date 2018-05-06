import React, { Component } from 'react';
import AchievementItem from "./AchievementItem";
class Achievements extends Component {
    
    render() {
        let achievementsItems = this.props.achievements.map(achievement=>{
            return(
                <AchievementItem achievement={achievement}/>
            );
        }); 
        return (
            <div className="achievements_grid section black-section">  
                <img className="decoration" src={require("../../resources/section_decoration.png")}/>

                <label className="section_label">إنجازاته</label>


                <div id="achievements_container">
                    {achievementsItems}
                </div>

            </div>
        );
    }
}

export default Achievements;
