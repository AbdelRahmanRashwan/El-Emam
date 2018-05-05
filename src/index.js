import React from 'react';
import ReactDOM from 'react-dom';
//import Media from './components/Home/Media';
import News from './components/News/NewsPage';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<News />, document.getElementById('root'));
registerServiceWorker();
