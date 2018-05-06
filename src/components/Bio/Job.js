import React, { Component } from 'react';

class Job extends Component {
    
    render() {
        return (
            <div class="jop_item_slider">
                <img class="jop_image" src={this.props.job.image}/>
                <h3>{this.props.job.title}</h3>
                <h4>{this.props.job.date}</h4>
                <p>{this.props.job.content}</p>
            </div>
        );
    }
}

export default Job;
