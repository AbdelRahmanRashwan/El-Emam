import React, { Component } from 'react';

class Job extends Component {
    render() {
        return (
            <li>
                <div>
                    <img src={require("../../resources/newsImage.png")}/>
                    <p className="jop_history">{this.props.job.history}</p>
                    <hr/>
                    <p className="second_p">{this.props.job.content}</p>
                </div>
            </li>
        );
    }
}

export default Job;
