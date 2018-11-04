// import {createStore, applyMiddleware, compose} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import rootReducer from '../reducers/index';
import { connectRouter } from 'connected-react-router';

const DevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


export const history = createBrowserHistory();
// const store = createStore(connectRouter(history)(rootReducer), compose(applyMiddleware(thunk), DevTools )  );
// should fix the error with DevTools in Chrome
const store = createStore(connectRouter(history)(rootReducer), DevTools, applyMiddleware(thunk));

export default store;