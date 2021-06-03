import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
// import * as serviceWorker from './serviceWorker';
import App from './App/App';

const router = <BrowserRouter><App /></BrowserRouter>

ReactDOM.render( router, document.getElementById('root'));

// serviceWorker.unregister();
