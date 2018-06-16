import React, { Component } from 'react';
import Job from "./Job"
import {jssor_1_slider_init} from "../../js/slider.js"

class Slider extends Component {
    
    constructor(){
        super();
        this.state = {
            jobs:[]
        }
    }
    
    componentDidMount(){
        fetch('http://localhost:4000/positions')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            jobs: responseJson.positions
          })
            jssor_1_slider_init(290);
        });
    }
    
    render() {
        const sliderStyle = {
            position:'relative',
            margin:'0 auto',
            top:'0px',
            left:'0px',
            width:'1366px',
            height:'760px',
            overflow:'hidden',
            visibility:'hidden'
        }
        const slidesStyle = {
            cursor:'default',
            position:'relative',
            top:'0px',
            left:'0px',
            width:'1366px',
            height:'760px',
            overflow:'hidden'
        }

        let jobs = this.state.jobs.map(job=>{
            return(
                <Job job={job}/>
            );
        });
        return (
            <div class="positions_slider section">
                <img class="decoration" src={require("../../resources/section_decoration.png")}/>

                <lable class="section_label">مناصبه</lable>

                <div id="jssor_1" style={sliderStyle} class="slider">

                    <div data-u="slides" style={slidesStyle}>
                        {jobs}
                    </div>

                    <div data-u="arrowleft" class="jssora051 left" data-autocenter="2" data-scale="0.75" data-scale-left="0.75">
                        <img class="a" src={require("../../resources/left-arrow.png")}/>
                    </div>
                    <div data-u="arrowright" class="jssora051 right" data-autocenter="2" data-scale="0.75" data-scale-right="0.75">
                        <img class="a" src={require("../../resources/right-arrow.png")}/>
                    </div>
                </div>

            </div>
        );
    }
}

export default Slider;
