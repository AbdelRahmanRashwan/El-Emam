import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Bio from './components/Bio';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<Bio />, document.getElementById('root'));
registerServiceWorker();
