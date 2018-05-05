import React from 'react';
import ReactDOM from 'react-dom';
import Bio from './components/Bio/Bio';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<Bio />, document.getElementById('root'));
registerServiceWorker();
