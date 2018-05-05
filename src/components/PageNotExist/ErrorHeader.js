import React from 'react';


const ErrorHeader = () => {
    
    return (
        <header>
            <div className="container">
                <img id="logo" src={require("../../resources/logo.png")}/>

                <div id="share-eng">
                    <img id="share" src={require("../../resources/social.png")}/>
                    <p id="english">EN</p>
                </div>
            </div>
        </header>
    )
    
}

export default ErrorHeader;