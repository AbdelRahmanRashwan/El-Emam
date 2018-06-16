import React, { Component } from 'react';
import Qoutation from "./Qoutation";
import CareerTimeline from "./Timeline";
import Birth from "./Birth"
import Achievements from "./Achievements"
import Slider from "./Slider"

class BioContent extends Component {
    constructor(){
        super();
        this.state = {
            birth:{},
            careerHistory:[],
            achievements:[],
            qoutation:""
        }
    }

    componentWillMount(){
      this.setState({
          birth:{
              birth_and_history:"ولد في مدينة أم القيوين بتاريخ 1952/10/01 م, متزوج من كريمة صاحب السمو الشيخ/ صقر بن محمد القاسمي.ولد في مدينة أم القيوين بتاريخ 1952/10/01 م, متزوج من كريمة صاحب السمو الشيخ/ صقر بن محمد القاسمي.ولد في مدينة أم القيوين بتاريخ 1952/10/01 م, متزوج من كريمة صاحب السمو الشيخ/ صقر بن محمد القاسمي.ولد في مدينة أم القيوين بتاريخ 1952/10/01 م, متزوج من كريمة صاحب السمو الشيخ/ صقر بن محمد القاسمي.ولد في مدينة أم القيوين بتاريخ 1952/10/01 م, متزوج من كريمة صاحب السمو الشيخ/ صقر بن محمد القاسمي.ولد في مدينة أم القيوين بتاريخ 1952/10/01 م, متزوج من كريمة صاحب السمو الشيخ/ صقر بن محمد القاسمي.ولد في مدينة أم القيوين بتاريخ 1952/10/01 م, متزوج من كريمة صاحب السمو الشيخ/ صقر بن محمد القاسمي.ولد في مدينة أم القيوين بتاريخ 1952/10/01 م, متزوج من كريمة صاحب السمو الشيخ/ صقر بن محمد القاسمي."
          },
          achievements: [],
          jobs: [],
          qoutation:"إن المسلمين صنعوا حضارة راقية قامت على العلم والمعرفة والتجربة, وسعد بها الناس شرقاََ وغرباََ, تحت ظلال هذا الدين الحنيف."
      });
    }

    render() {
        return (
            <div className="content">

                <div className="bio">
                    <div className="bio_header">
                        <label>السيرة الذاتية</label>
                        <img className="underline" src={require("../../resources/underline.png")}/>
                    </div>

                    <div className="bio_content">

                        <Birth birth={this.state.birth}/>
                        <CareerTimeline />
                        <Slider/>
                        <Achievements/>

                    </div>
                </div>

                <Qoutation qoutation ={this.state.qoutation}/>

            </div>
        );
    }
}

export default BioContent;
