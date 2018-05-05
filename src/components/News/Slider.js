import React, { Component } from 'react';
import NewsSliderItem from "./NewsSliderItem"
import {jssor_1_slider_init} from "../../js/slider.js"

class Slider extends Component {
    
    componentDidMount(){
        jssor_1_slider_init(720);
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

        let news = this.props.items.map((item)=>{
            return(
                <NewsSliderItem news={item}/>
            );
        });
        return (

            <div id="jssor_1" style={sliderStyle} className="slider">

                <div data-u="slides" style={slidesStyle}>
                    {news}
                </div>

            </div>

        );
    }
}

export default Slider;
