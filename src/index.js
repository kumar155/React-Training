import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import './index.css';
import App from './App';
import ReactReduxComponent from './ReduxComponent';
import MyComponent from './events';
import registerServiceWorker from './registerServiceWorker';
import LifeCycle from './lifecycle';
import List from './MyListComponent';
import StateComponent from './stateComponent';

ReactDOM.render(
  <Provider store={configureStore()}>
    <ReactReduxComponent />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
