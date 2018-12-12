import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createBrowserHistory} from 'history';
import rootReducer from '../reducers/index';
// import { connectRouter } from 'connected-react-router';
import { routerMiddleware } from 'connected-react-router'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

let initialState={};

function parseJWT() {
    let token = localStorage.getItem('token');
    if (token) {
        initialState ={
            isLogin: true
        };
        let base64 = token.split('.')[1];
        return JSON.parse(window.atob(base64));
    } else {
        initialState ={
            isLogin: false
        };
    }
}
parseJWT();


const store = createStore(
    rootReducer(history),
   {isLogin: true},
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history), // for dispatching history actions
            thunk
        ),
    )
);


export default store;