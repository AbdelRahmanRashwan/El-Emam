import React, { Component } from 'react';


class ContactUs extends Component {
    
    render() {
        return (
            <div class="content">
                <div class="row">
                    <div class="contact_us column">
                        <label class="hLabel">تواصل معنا</label>
                        <div class="form">
                            <label >الاسم:</label><br/>
                            <input class="form-control" type="text"/><br/>
                            <label >البريد الالكتروني:</label><br/>
                            <input class="form-control" type="email"/><br/>
                            <label >الرساله:</label><br/>
                            <textarea class="form-control"></textarea><br/>
                            <button class="button"> أرسل</button>

                        </div>
                    </div>

                    <div class="user_info column">
                        <label class="hLabel">بيانات الاتصال</label>
                        <div class="content">
                            <label >البريد الالكتروني:</label><br/>
                            <small>el_azhar@mail.com</small><br/>
                            <label >العنوان:</label><br/>
                            <small>الدور السادس - مبنى مشيخه اﻷزهر - بجوار الحديقه - القاهره</small><br/>
                            <label >تليفون:</label><br/>
                            <small>29333333 - 29222222</small><br/>
                            <label>الموقع:</label><br/>
                            <small>www.alemamalakbar.eg</small><br/>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;
