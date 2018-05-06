import React, { Component } from 'react';

import {jssor_1_slider_init} from "../../js/slider.js"
import '../../css/media.css'
import MediaCard from './MediaCard'

class Slider extends Component {
    
    componentDidMount(){
        jssor_1_slider_init(720);
    }
    
    render() {
        const sliderStyle = {
            position: 'relative',
            margin:'0 auto',
            top: '0px',
            left: '0px',
            width:'1366px',
            height:'635px',
            overflow:'hidden'
        }
        const slidesStyle = {
            width:'1366px',
            height:'635px',
        }

        let medias = this.props.medias.map(medias=>{
            return(
                <MediaCard data={medias}/>
            );
        });
        return (
            <div id="jssor_1" style={sliderStyle}>
                <div data-u="slides" style={slidesStyle}>
                    <div className="news_item_slider">
                        <img className="news_image" src={require("../../resources/newsImage.png")}/>
                        <div className="news_item_slider_content">
                            <p className="news_item_head_line">قال فضلت الامام الكبار: ان القرآنا الكريم استعمال منذ اسلوب الاحوارمع الشباب, وليس اسلوب الملا والأمر والنهي وعرضلنا النموذجين أحدهما</p>
                            <p className="time">10:00</p>
                        </div>
                    </div>

                    <div className="news_item_slider">
                        <img className="news_image" src={require("../../resources/newsImage.png")}/>
                        <div className="news_item_slider_content">
                            <p className="news_item_head_line">قال فضلت الامام الكبار: ان القرآنا الكريم استعمال منذ اسلوب الاحوارمع الشباب, وليس اسلوب الملا والأمر والنهي وعرضلنا النموذجين أحدهما</p>
                            <p className="time">10:00</p>
                        </div>
                    </div>

                    <div className="news_item_slider">
                        <img className="news_image" src={require("../../resources/newsImage.png")}/>
                        <div className="news_item_slider_content">
                            <p className="news_item_head_line">قال فضلت الامام الكبار: ان القرآنا الكريم استعمال منذ اسلوب الاحوارمع الشباب, وليس اسلوب الملا والأمر والنهي وعرضلنا النموذجين أحدهما</p>
                            <p className="time">10:00</p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Slider;
