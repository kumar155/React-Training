import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyComponent from './events';
import registerServiceWorker from './registerServiceWorker';
import LifeCycle from './lifecycle';
import List from './MyListComponent';

ReactDOM.render(<List/>, document.getElementById('root'));
registerServiceWorker();
