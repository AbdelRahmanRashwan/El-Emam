import React from 'react';
import ReactDOM from 'react-dom';
import Bio from './components/Bio/Bio';
import Media from './components/Home/Media';
import ContactUs from './components/ContactUs/ContactUs';

import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<ContactUs />, document.getElementById('root'));
registerServiceWorker();
