import { combineReducers } from 'redux';
import {tests} from './fetchReducer';
import {selectedTest} from './testReducer';

const rootReduser = combineReducers ({
    tests,
    selectedTest,
});

export default rootReduser;