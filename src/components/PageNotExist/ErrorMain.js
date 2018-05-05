import React from 'react';

const ErrorMain = () => {
    
    const style = {
        width: '60%',
        marginBottom: '1em'
    };
    
    return (
        
        <main>
            <center>
                <img style = {style} src={require("../../resources/404.png")}/>
            </center>
            <center>
                <div id="content-404">
                    <h3 id="page-not-exist">الصفحة غير موجودة</h3>
                    <p id="message-404">عذرا ، ولكن الصفحة التي كنت تبحث عنها لم يتم العثور عليها. حاول التحقق من URL للخطأ ، ثم اضغط على زر التحديث في المتصفح الخاص بك أو حاول العثور على شيء آخر في موقعنا .</p>
                    <a href="#" className="go-home-link">الرجوع إلي الصفحة الرئيسية</a>
                </div>
            </center>

        </main>
    )
    
}

export default ErrorMain;