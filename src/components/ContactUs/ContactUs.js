import React, { Component } from 'react';
import AppHeader from "../Header/AppHeader";
import ContactUsForm from "./ContactUsForm";
import Footer from "../Footer/Footer"
import '../../css/contact_us.css';

class ContactUs extends Component {
    render() {
    return (
        <div className="contact_us">
            <AppHeader/>
            <ContactUsForm/>
            <Footer/>
        </div>
    );
    }
}

export default ContactUs;
