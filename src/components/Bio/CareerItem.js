import React, { Component } from 'react';

class CareerItem extends Component {
    render() {
        return (
            <li>
                <div>
                    <img src={this.props.job.image}/>
                    <p className="job_history">{this.props.job.history}</p>
                    <hr/>
                    <p className="job_qoute white_p">{this.props.job.content}</p>
                </div>
            </li>
        );
    }
}

export default CareerItem;
