import { combineReducers } from 'redux';
import currentResult from '../../redux/reducers/currentResultReducer';
import currentAnswer from '../../redux/reducers/currentAnswerReducer';
import correctResult from '../../redux/reducers/currentCorrectResultReducer';
import testIsReady from '../../redux/reducers/testIsReadyReducer';

const rootReduser = combineReducers ({
    currentResult, currentAnswer, correctResult, testIsReady,
});

export default rootReduser;