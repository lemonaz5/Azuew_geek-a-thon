import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes';
import { Router, hashHistory } from 'react-router'

ReactDOM.render(
<Router history={hashHistory} route={routes}/>, document.getElementById('root'));
registerServiceWorker();
