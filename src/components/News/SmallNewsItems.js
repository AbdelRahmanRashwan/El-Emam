import React, { Component } from 'react';
import NewsItem from '../News/NewsItem'

class SmallNewsItems extends Component {

    constructor(){
        super();
        this.news = [
                {
                    image : require("../../resources/newsImageSmall.png"), 
                    title : "قال فضلت الامام الكبار: ان القرآنا الكريم استعمال منذ اسلوب" ,
                    date : "منذ 1 دقيقة" ,
                    desc : "قال فضلت الامام الكبار: ان القرآنا الكريم استعمال منذ اسلوب الاحوارمع الشباب, وليس اسلوب الملا والأمر",
                    tag : "اليوم السبع" ,
                    hash1 : "#اليوم_السابع",
                    hash2 : "#اليوم_السابع" ,
       
                },
                {
                    image : require("../../resources/newsImageSmall.png"), 
                    title : "قال فضلت الامام الكبار: ان القرآنا الكريم استعمال منذ اسلوب" ,
                    date : "منذ 1 دقيقة" ,
                    desc : "قال فضلت الامام الكبار: ان القرآنا الكريم استعمال منذ اسلوب الاحوارمع الشباب, وليس اسلوب الملا والأمر",
                    tag : "اليوم السبع" ,
                    hash1 : "#اليوم_السابع",
                    hash2 : "#اليوم_السابع" ,
       
                },
                {
                    image : require("../../resources/newsImageSmall.png"), 
                    title : "قال فضلت الامام الكبار: ان القرآنا الكريم استعمال منذ اسلوب" ,
                    date : "منذ 1 دقيقة" ,
                    desc : "قال فضلت الامام الكبار: ان القرآنا الكريم استعمال منذ اسلوب الاحوارمع الشباب, وليس اسلوب الملا والأمر",
                    tag : "اليوم السبع" ,
                    hash1 : "#اليوم_السابع",
                    hash2 : "#اليوم_السابع" ,
       
                },
                {
                    image : require("../../resources/newsImageSmall.png"), 
                    title : "قال فضلت الامام الكبار: ان القرآنا الكريم استعمال منذ اسلوب" ,
                    date : "منذ 1 دقيقة" ,
                    desc : "قال فضلت الامام الكبار: ان القرآنا الكريم استعمال منذ اسلوب الاحوارمع الشباب, وليس اسلوب الملا والأمر",
                    tag : "اليوم السبع" ,
                    hash1 : "#اليوم_السابع",
                    hash2 : "#اليوم_السابع" ,
       
                },
                {
                    image : require("../../resources/newsImageSmall.png"), 
                    title : "قال فضلت الامام الكبار: ان القرآنا الكريم استعمال منذ اسلوب" ,
                    date : "منذ 1 دقيقة" ,
                    desc : "قال فضلت الامام الكبار: ان القرآنا الكريم استعمال منذ اسلوب الاحوارمع الشباب, وليس اسلوب الملا والأمر",
                    tag : "اليوم السبع" ,
                    hash1 : "#اليوم_السابع",
                    hash2 : "#اليوم_السابع" ,
       
                },
                {
                    image : require("../../resources/newsImageSmall.png"), 
                    title : "قال فضلت الامام الكبار: ان القرآنا الكريم استعمال منذ اسلوب" ,
                    date : "منذ 1 دقيقة" ,
                    desc : "قال فضلت الامام الكبار: ان القرآنا الكريم استعمال منذ اسلوب الاحوارمع الشباب, وليس اسلوب الملا والأمر",
                    tag : "اليوم السبع" ,
                    hash1 : "#اليوم_السابع",
                    hash2 : "#اليوم_السابع" ,
       
                }
        ]
    }

  render() {
    const style = {
        width:'65%', 
        margin: '3em auto 0 auto'
    }

    let items = this.news.map((item)=>{
        return <NewsItem content = {item}/>
    })

    return (
        <div id="small_news_items" style={style}>

            {items}

            <center>
                <div className="more">
                    <img src={require("../../resources/more_icon.png")}/>
                    <h3>المزيد</h3>
                </div>
            </center>

        </div>

    );
  }
}

export default SmallNewsItems;
