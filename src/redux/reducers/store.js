import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReduser from './index';

const DevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReduser, DevTools, applyMiddleware(thunk));

export default store;