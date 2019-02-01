import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
// import {createBrowserHistory} from 'history';
import rootReducer from '../reducers/index';
// import { connectRouter } from 'connected-react-router';
// import { routerMiddleware } from 'connected-react-router'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let preLoadedState = {};
let check = localStorage.getItem('token') !== null;

if (check) {
  console.log("initial state true");
  preLoadedState.isLogin = true;
  console.log(preLoadedState)
}
// export const history = createBrowserHistory();
const store = createStore(
    rootReducer(),
  preLoadedState,
    composeEnhancers(
        applyMiddleware(
            // routerMiddleware(history), // for dispatching history actions
            thunk
        ),
    )
);

export default store;