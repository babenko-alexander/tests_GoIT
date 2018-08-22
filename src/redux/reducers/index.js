import { combineReducers } from 'redux';
import emailArr from './emailReducers'
import emailChange from './emailChangeReducers'
import passChange from './passChangeReducers'
import passwordArr from './passwordReducers' 
import checkBoxIsActive from './checkBoxReducers'


const rootReduser = combineReducers ({
    emailArr: emailArr,
    passwordArr: passwordArr,
    emailChange: emailChange,
    passChange: passChange,
    checkBoxIsActive: checkBoxIsActive,
});

export default rootReduser;