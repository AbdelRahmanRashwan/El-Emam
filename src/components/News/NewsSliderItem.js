import React from 'react';

const NewsSliderItem = (props) => {

    console.log(props.news);

    const styleFloatRight = {
        float:'right'
    };
    
    const styleFloatLeft = {
        float:'left'
    };
    const styleFloatLeftWithPadding = {
        float:'left',
        paddingLeft:'2em'
    };

    return (

        <div className="news_item_slider">
            <img className="news_image" src={props.news.image}/>
            <div className="news_item_slider_content">
                <p className="news_item_head_line">{props.news.title}</p>
                <hr/>
                <div className="news_info">
                    <h6 className="news_date">{props.news.date}</h6>
                    <img className="news_share_img" src={require("../../resources/share.png")}/>
                </div>
                <p className="news_item_content">{props.news.desc}</p>
                <div className="hashTags">
                    <h6 style={styleFloatRight}>{props.news.tag}</h6>
                    <h6 style={styleFloatLeft}>{props.news.hash1}</h6>
                    <h6 style={styleFloatLeftWithPadding}>{props.news.hash2}</h6>
                </div>
                <a className="read_more" href="#">قراءة المزيد</a>
            </div>
        </div>
    )
    
}

export default NewsSliderItem;