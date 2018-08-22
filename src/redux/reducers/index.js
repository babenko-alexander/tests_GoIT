import {combineReducers} from 'redux';
import {tests} from './fetchReducer';

const rootReduser = combineReducers({
    tests,
});

export default rootReduser;