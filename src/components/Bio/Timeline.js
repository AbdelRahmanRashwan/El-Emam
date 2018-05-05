import React, { Component } from 'react';
import "../../css/timeline.css";
import Job from "./Job";

/**
*This class represents the timeline component showing emam career
*/
class CareerTimeline extends Component {

    constructor(){
        super();
        this.state = {
            jobs:[]
        };
    }
    
    // showing time line items when in viewport
    animateTimeline(){

        'use strict';

        // define variables
        var items = document.querySelectorAll(".timeline li");

        // check if an element is in viewport
        // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function callbackFunc() {
            for (var i = 0; i < items.length; i++) {
                if (isElementInViewport(items[i])) {
                    items[i].classList.add("in-view");
                }
            }
        }

        // listen for events
        window.addEventListener("load", callbackFunc);
        window.addEventListener("resize", callbackFunc);
        window.addEventListener("scroll", callbackFunc);

    }
    
    componentWillMount(){
        
        let jobs = [
            {
                history:"عمل معيداََ, ومدرساََ مساعداََ, ومدرسا, وأستاذاََ مساعداََ للعقيدة والفلسفه بجامعة اﻷزهر, وحالياََ أستاذ للعقيدة",
                content:"قال فضلت الامام الكبار: ان القرآنا الكريم استعمال منذ اسلوب الاحوارمع الشباب, وليس اسلوب الملا والأمر والنهي وعرضلنا النموذجين أحدهما الشعب المتمردالذيياستعلى وايستكبار ولا يستجيب والنموذج الأأخر للشعب الوع المتدابار الذي يع ما"
            },
            {
                history:"عمل معيداََ, ومدرساََ مساعداََ, ومدرسا, وأستاذاََ مساعداََ للعقيدة والفلسفه بجامعة اﻷزهر, وحالياََ أستاذ للعقيدة",
                content:"قال فضلت الامام الكبار: ان القرآنا الكريم استعمال منذ اسلوب الاحوارمع الشباب, وليس اسلوب الملا والأمر والنهي وعرضلنا النموذجين أحدهما الشعب المتمردالذيياستعلى وايستكبار ولا يستجيب والنموذج الأأخر للشعب الوع المتدابار الذي يع ما"
            },
            {
                history:"عمل معيداََ, ومدرساََ مساعداََ, ومدرسا, وأستاذاََ مساعداََ للعقيدة والفلسفه بجامعة اﻷزهر, وحالياََ أستاذ للعقيدة",
                content:"قال فضلت الامام الكبار: ان القرآنا الكريم استعمال منذ اسلوب الاحوارمع الشباب, وليس اسلوب الملا والأمر والنهي وعرضلنا النموذجين أحدهما الشعب المتمردالذيياستعلى وايستكبار ولا يستجيب والنموذج الأأخر للشعب الوع المتدابار الذي يع ما"
            },
            {
                history:"عمل معيداََ, ومدرساََ مساعداََ, ومدرسا, وأستاذاََ مساعداََ للعقيدة والفلسفه بجامعة اﻷزهر, وحالياََ أستاذ للعقيدة",
                content:"قال فضلت الامام الكبار: ان القرآنا الكريم استعمال منذ اسلوب الاحوارمع الشباب, وليس اسلوب الملا"
            }
        ];
        this.setState({jobs:jobs});
    }
    
    componentDidMount(){
        this.animateTimeline();
    }
    
    render() {
        let jobsItems = this.state.jobs.map(job=>{
            return(
                <Job job={job}/>
            );
        })
        return (
            
            <div className="career timeline_s section black-section">
            
                <img className="decoration" src={require("../../resources/section_decoration.png")}/>

                <lable className="section_label">مسيرته العلمية</lable>

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
