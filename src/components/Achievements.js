import React, { Component } from 'react';
import AchievementItem from "./AchievementItem";
class Achievements extends Component {
    
    constructor(){
        super();
        this.state = {
            achievements:[]
        };
    }
    
    componentWillMount(){
        let achievements = [
            {
                title:"رئيس جامعة اﻷزهر",
                date:"28 سبتمبر 2003 - 19 مارس 2010",
                content:"قال فضيلة الإمام اﻷكبر: إن القرءآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, وليس أسلوب الإملاء واﻷمر والنهى, وعرض لنموذجين: أحدهما للشاب المتمرد الذي يسعلي ويستكبر ولا يستجيب."
            },
            {
                title:"رئيس جامعة اﻷزهر",
                date:"28 سبتمبر 2003 - 19 مارس 2010",
                content:"قال فضيلة الإمام اﻷكبر: إن القرءآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, وليس أسلوب الإملاء واﻷمر والنهى, وعرض لنموذجين: أحدهما للشاب المتمرد الذي يسعلي ويستكبر ولا يستجيب."
            },
            {
                title:"رئيس جامعة اﻷزهر",
                date:"28 سبتمبر 2003 - 19 مارس 2010",
                content:"قال فضيلة الإمام اﻷكبر: إن القرءآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, وليس أسلوب الإملاء واﻷمر والنهى, وعرض لنموذجين: أحدهما للشاب المتمرد الذي يسعلي ويستكبر ولا يستجيب."
            },
            {
                title:"رئيس جامعة اﻷزهر",
                date:"28 سبتمبر 2003 - 19 مارس 2010",
                content:"قال فضيلة الإمام اﻷكبر: إن القرءآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, وليس أسلوب الإملاء واﻷمر والنهى, وعرض لنموذجين: أحدهما للشاب المتمرد الذي يسعلي ويستكبر ولا يستجيب."
            },
            {
                title:"رئيس جامعة اﻷزهر",
                date:"28 سبتمبر 2003 - 19 مارس 2010",
                content:"قال فضيلة الإمام اﻷكبر: إن القرءآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, وليس أسلوب الإملاء واﻷمر والنهى, وعرض لنموذجين: أحدهما للشاب المتمرد الذي يسعلي ويستكبر ولا يستجيب."
            },
            {
                title:"رئيس جامعة اﻷزهر",
                date:"28 سبتمبر 2003 - 19 مارس 2010",
                content:"قال فضيلة الإمام اﻷكبر: إن القرءآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, وليس أسلوب الإملاء واﻷمر والنهى, وعرض لنموذجين: أحدهما للشاب المتمرد الذي يسعلي ويستكبر ولا يستجيب."
            }
        ];
        this.setState({achievements:achievements});
    }
    
    render() {
        let achievementsItems = this.state.achievements.map(achievement=>{
            return(
                <AchievementItem achievement={achievement}/>
            );
        }); 
        return (
            <div className="achievements_grid section black-section">  
                <img className="decoration" src={require("../resources/section_decoration.png")}/>

                <lable className="section_label">إنجازاته</lable>


                <div id="achievements_container">
                    {achievementsItems}
                </div>

            </div>
        );
    }
}

export default Achievements;
