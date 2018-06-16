import React, { Component } from 'react';
import AchievementItem from "./AchievementItem";
class Achievements extends Component {

  constructor(){
      super();
      this.state = {
          achievements:[]
      }
  }

  componentDidMount(){
    fetch('http://localhost:4000/achievements')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          achievements: responseJson.achievements
        })
        console.log(responseJson.achievements);
      });
  }

    render() {
        let achievementsItems = this.state.achievements.map(achievement=>{
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
