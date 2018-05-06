import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Media from './components/Home/Media';
import Bio from './components/Bio/Bio';

class App extends React.Component{
    
    render(){
        return (
            <BrowserRouter > 
                <div>
                    <Route path = "/Bio" component = {Bio}/>
                    <Route path = "/Media" component = {Media}/>
                    <Route path = "/News" component = {Media}/>
                    <Route path = "/Mo2alfat" component = {Bio}/>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
