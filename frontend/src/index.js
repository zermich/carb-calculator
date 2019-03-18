import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './containers/css/main.css'
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

const protocol = 'http://';
const ip = '134.209.115.188';
const port = '3000';
const api = '/carbcalc-api';
const prefix = `${protocol}${ip}:${port}${api}`;

const local = `${protocol}localhost:${port}${api}`;

axios.defaults.baseURL = local;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
