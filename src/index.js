/* jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'react';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import cards from './reducers/cards.js';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(cards);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
