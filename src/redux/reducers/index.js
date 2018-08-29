import { combineReducers } from 'redux';

import currentAnswer from '../../redux/reducers/currentAnswerReducer';
import correctResult from '../../redux/reducers/currentCorrectResultReducer';
import testIsReady from '../../redux/reducers/testIsReadyReducer';
import {tests} from './fetchReducer';
import {selectedTest} from './testReducer';

const rootReduser = combineReducers ({
    currentAnswer,
    correctResult,
    testIsReady,
    tests,
    selectedTest,
});

export default rootReduser;