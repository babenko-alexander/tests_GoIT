import { combineReducers } from 'redux';
import dataResaults from './reducerDataResaults';
import registration from './registrationReducers.jsx';
import enter from './enterReducers';
import emailChange from './emailChangeReducers';
import passChange from './passChangeReducers';
import checkBoxIsActive from './checkBoxReducers';
import isLogin from './isLogin';
import showAgreement from './agreementReducers'
import currentAnswer from './currentAnswerReducer';
import currentResult from './currentResultReducer';
import correctResult from './currentCorrectResultReducer';
import testIsReady from './testIsReadyReducer';
import {tests} from './fetchReducer';
import {selectedTest} from './testReducer';

const rootReducer = combineReducers ({
    currentAnswer,
    currentResult,
    correctResult,
    testIsReady,
    tests,
    selectedTest,
    dataResaults,
    registration,
    enter,
    emailChange,
    passChange,
    checkBoxIsActive,
    isLogin,
    showAgreement,
});

export default rootReducer;