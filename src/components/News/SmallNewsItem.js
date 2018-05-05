import React from 'react';

const SmallNewsItem = (props) => {

    const styleFloatRight = {
        float:'right'
    };
    
    const styleFloatLeft = {
        float:'left'
    };
    const styleFloatLeftWithPadding = {
        float:'left',
        paddingLeft:'30px'
    };

    return (

        <div className="news_item_small" style={styleFloatRight}>
            <img className="news_image_small" src={props.content.image}/>
            <div className="news_item_small_container">
                <p className="news_item_small_headline">{props.content.title}</p>
                <hr/>
                <div className="news_info">
                    <h6 className="news_date">{props.content.date}</h6>
                    <img className="news_share_img" src={require("../../resources/share.png")}/>
                </div>
                <p className="news_item_small_content">{props.content.desc}</p>
                <div className="hashTags">
                    <h6 style={styleFloatRight}>{props.content.tag}</h6>
                    <h6 style={styleFloatLeft}>{props.content.hash1}</h6>
                    <h6 style={styleFloatLeftWithPadding}>{props.content.hash2}</h6>
                </div>
                <a href="#">قراءة المزيد</a>
            </div>

        </div>
    )
    
}

export default SmallNewsItem;