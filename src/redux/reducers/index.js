import { combineReducers } from 'redux';
import dataResaults from './reducerDataResaults';

import registration from './registrationReducers.jsx';
import enter from './enterReducers';
// import emailArr from './emailReducers';
import emailChange from './emailChangeReducers';
import passChange from './passChangeReducers';
// import passwordArr from './passwordReducers';
import checkBoxIsActive from './checkBoxReducers';


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
    registration,
    enter,
    // emailArr: emailArr,
    // passwordArr: passwordArr,
    emailChange,
    passChange,
    checkBoxIsActive,
});

export default rootReduser;