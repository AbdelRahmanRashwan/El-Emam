import React, { Component } from 'react';
import AppHeader from "../Header/AppHeader";
import ContactUsContent from "./ContactUsContent";
import Footer from "../Footer/Footer"
import '../../css/contact_us.css';

class ContactUs extends Component {
    render() {
    return (
        <div className="contact_us">
            <AppHeader/>
            <ContactUsContent/>
            <Footer/>
        </div>
    );
    }
}

export default ContactUs;
