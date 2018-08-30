import React from 'react';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';
import {addCurrentResult} from '../../redux/actions/currentResultActions';
import {addCurrentAnswers} from '../../redux/actions/currentAnswerActions';
import {setTestIsReady} from '../../redux/actions/testIsReadyActions';
import styles from './TestCard.css';

const TestCard = ({testname, index, question, answers, clas, addCurrentAnswers, correctResult, addCurrentResult}) => {
    console.log('card', testname, index, question, answers);

    const addCurrentAnswersFunc = (e) => {
        addCurrentAnswers(e.target.value, e.target.dataset.index);

        let data;
        (e.target.value === correctResult[e.target.dataset.index]) ? data = true : data = false;
        addCurrentResult(data, e.target.dataset.index);
    };

    return (
        <div className={styles.testcard}>
        {/*<div className={clas}>*/}
            <p className={styles.testcard__question}>{+index + 1}. {question}</p>
            <form method='post' onChange={(addCurrentAnswersFunc)}>
                {answers.map((answ, i) =>
                    <label
                        className={styles.testcard__answer}
                        id={`${answ}${i}`}
                        key={`${testname}${i}`}
                    >
                        <input
                            type="radio"
                            name="answer"
                            id={`${answ}${i}`}
                            data-index={index}
                            className={styles.testcard__answers}
                            value={answ}
                            // onChange={()=> console.log('answer changed')}
                        />
                        {answ}
                    </label>
                )}
            </form>
        </div>
    );
};

TestCard.propTypes = {};
TestCard.defaultProps = {};


function MSTP(state) {
    return {
        currentResult: state.currentResult,
        currentAnswer: state.currentAnswer,
        correctResult: state.correctResult,
    }
}

function MDTP(dispatch) {
    return {
        addCurrentResult: function (data, index) {
            dispatch(addCurrentResult(data, index))
        },
        addCurrentAnswers: function (data, index) {
            dispatch(addCurrentAnswers(data, index))
        },
        // setTestIsReady: function (type) {
        //     dispatch(setTestIsReady(type))
        // },
    }
}

export default connect(MSTP, MDTP)(TestCard);