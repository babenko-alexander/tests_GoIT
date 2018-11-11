import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

// import {BrowserRouter} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';

import store, {history} from './redux/store/store';

import App from './App';
import './index.css';

// ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
               <App/>
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));
