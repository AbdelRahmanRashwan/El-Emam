import React, { Component } from 'react';


class ContactUsForm extends Component {
    
    render() {
        return (
            <div className="contact_us column">
                <label className="hLabel">تواصل معنا</label>
                <div className="form">
                    <label >الاسم:</label><br/>
                    <input className="form-control" type="text"/><br/>
                    <label >البريد الالكتروني:</label><br/>
                    <input className="form-control" type="email"/><br/>
                    <label >الرساله:</label><br/>
                    <textarea className="form-control"></textarea><br/>
                    <button className="button"> أرسل</button>

                </div>
            </div>
        );
    }
}

export default ContactUsForm;
