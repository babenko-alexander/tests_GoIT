import { combineReducers } from 'redux';
import registration from './registrationReducers.jsx';
import enter from './enterReducers';
// import emailArr from './emailReducers';
import emailChange from './emailChangeReducers';
import passChange from './passChangeReducers';
// import passwordArr from './passwordReducers' ;
import checkBoxIsActive from './checkBoxReducers';
import isLogin from './isLogin';
import showAgreement from './agreementReducers'


const rootReducer = combineReducers ({
    registration: registration,
    enter: enter,
    // emailArr: emailArr,
    // passwordArr: passwordArr,
    emailChange: emailChange,
    passChange: passChange,
    checkBoxIsActive: checkBoxIsActive,
    isLogin,
    showAgreement,
});

export default rootReducer;