import React, { Component } from 'react';
import "../../css/timeline.css";
import CareerItem from "./CareerItem";

/**
*This class represents the timeline component showing emam career
*/
class CareerTimeline extends Component {

    constructor(){
        super();
        this.state = {
            careerHistory:[]
        }
    }

    componentWillMount(){
      fetch('http://localhost:4000/education')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            careerHistory: responseJson.education
          })
        });
    }

    render() {
        let jobsItems = this.state.careerHistory.map(job=>{
            return(
                <CareerItem job={job}/>
            );
        });
        return (

            <div className="career timeline_s section black-section">

                <img className="decoration" src={require("../../resources/section_decoration.png")}/>

                <label className="section_label">مسيرته العلمية</label>

                <section className="timeline">
                    <ul className="timeline_ul">
                        {jobsItems}
                    </ul>
                    <img id="timeline_decoration" src={require("../../resources/decoration_d.png")}/>
                </section>
            </div>
        );
    }
}

export default CareerTimeline;
