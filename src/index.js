import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Media from './components/Home/Media';
import Bio from './components/Bio/Bio';
import NewsPage from './components/News/NewsPage'
import ContactUs from './components/ContactUs/ContactUs'

class App extends React.Component{
    
    render(){
        return (
            <BrowserRouter > 
                <div>
                    <Route path = "/News" component = {NewsPage}/>
                    <Route path = "/Media" component = {Media}/>
                    <Route path = "/Contact" component = {ContactUs}/>
                    <Route path = "/Mo2alfat" component = {Bio}/>
                    <Route path = "/Bio" component = {Bio}/>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
