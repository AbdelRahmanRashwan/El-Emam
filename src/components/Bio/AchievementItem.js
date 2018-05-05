import React, { Component } from 'react';

class AchievementItem extends Component {
    render() {
        return (
            <div className="achievement_item_small">
                <h2>{this.props.achievement.title}</h2>
                <h3>{this.props.achievement.date}</h3>
                <p className="white_p">{this.props.achievement.content}</p>
            </div>
        );
    }
}

export default AchievementItem;
