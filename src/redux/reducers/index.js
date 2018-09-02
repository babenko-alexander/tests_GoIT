import { combineReducers } from 'redux';
import dataResaults from './reducerDataResaults';


import currentAnswer from '../../redux/reducers/currentAnswerReducer';
import currentResult from '../../redux/reducers/currentResultReducer';
import correctResult from '../../redux/reducers/currentCorrectResultReducer';
import testIsReady from '../../redux/reducers/testIsReadyReducer';
import {tests} from './fetchReducer';
import {selectedTest} from './testReducer';

const rootReduser = combineReducers ({
    currentAnswer,
    currentResult,
    correctResult,
    testIsReady,
    tests,
    selectedTest,
    dataResaults,
});

export default rootReduser;