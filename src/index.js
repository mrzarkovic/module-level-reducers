import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { getRootReducers } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

import './modules/ModuleA';
import './modules/ModuleB';

const rootReducers = getRootReducers();

const store = createStore(rootReducers, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
