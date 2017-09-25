import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, BrowserRouter} from 'react-router-dom';

require('./scss/index.scss');

import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import Routes from './routes/routes';

const store = createStore(reducers, applyMiddleware(ReduxPromise))

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>
    ,document.getElementById('app'));
