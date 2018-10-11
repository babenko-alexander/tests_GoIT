import { combineReducers } from 'redux';
import dataResaults from './reducerDataResaults';

import registration from './registrationReducers';
import enter from './enterReducers';
import emailChange from './emailChangeReducers';
import passChange from './passChangeReducers';
import checkBoxStatus from './checkBoxReducers';
import isLogin from './isLogin';
import showAgreement from './agreementReducers'
import currentAnswer from './currentAnswerReducer';
import currentResult from './currentResultReducer';
import correctResult from './currentCorrectResultReducer';
import testIsReady from './testIsReadyReducer';
import tests from './testsReducer';
import selectedTest from './selectedTestReducer';
import resultIsActive from './resultPageReducer';
import modules from './modulesReducer';
import loginError from './LoginErrorReducer';
import messageText from './messageTextReducers';

const rootReducer = combineReducers ({
    currentAnswer,
    currentResult,
    correctResult,
    testIsReady,
    modules,
    tests,
    selectedTest,
    dataResaults,
    registration,
    enter,
    emailChange,
    passChange,
    checkBoxStatus,
    isLogin,
    showAgreement,
    resultIsActive,
    loginError,
    messageText,
});

export default rootReducer;