import React, { Component } from 'react';


class ContactUs extends Component {
    
    render() {
        return (
            <div className="user_info column">
                <label className="hLabel">بيانات الاتصال</label>
                <div className="content">
                    <label >البريد الالكتروني:</label><br/>
                    <small>{this.props.contacts.email}</small><br/>
                    <label >العنوان:</label><br/>
                    <small>{this.props.contacts.address}</small><br/>
                    <label >تليفون:</label><br/>
                    <small>{this.props.contacts.phones}</small><br/>
                    <label>الموقع:</label><br/>
                    <small>{this.props.contacts.website}</small><br/>

                </div>
            </div>
        );
    }
}

export default ContactUs;
