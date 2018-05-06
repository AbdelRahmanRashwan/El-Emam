import React, { Component } from 'react';
import AppHeader from "../Header/AppHeader"
import BioHeaderContent from "./BioHeaderContent"
import BioHeaderFooter from "./BioHeaderFooter"

class BioHeader extends Component {
    
    
    render() {
        const style = {
            background: 'transparent'
        };
        return (
            <div className="Bio-header">
                <AppHeader className="App-header" style={style}/>
                <BioHeaderContent />
                <BioHeaderFooter />
            </div>
        );
    }
}

export default BioHeader;
