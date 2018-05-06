import React, { Component } from 'react';
import ContactUsForm from "./ContactUsForm";
import Contacts from "./Contacts";

class ContactUsContent extends Component {
    
    constructor(){
        super();
        this.state = {
            contacts:{
                email:'el_azhar@mail.com',
                address:'الدور السادس - مبنى مشيخه اﻷزهر - بجوار الحديقه - القاهره',
                phones:'29333333 - 29222222',
                website:'www.alemamalakbar.eg'
            }
        }
    }
    
    
    render() {
        return (
            <div className="contact-us-content">
                <div className="row">
                    <ContactUsForm/>
                    <Contacts contacts={this.state.contacts}/>
                </div>
            </div>
        );
    }
}

export default ContactUsContent;
