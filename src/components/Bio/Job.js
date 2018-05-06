import React, { Component } from 'react';

class Job extends Component {
    
    render() {
        return (
            <div class="job_item_slider">
                <img class="job_image" src={this.props.job.image}/>
                <h3>{this.props.job.title}</h3>
                <h4>{this.props.job.date}</h4>
                <p className="white_p">{this.props.job.content}</p>
            </div>
        );
    }
}

export default Job;
