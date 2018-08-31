import React, {Object} from 'react';
// import PropTypes from 'prop-types';
import Result from '../../Components/Result/Result';
import {connect} from 'react-redux';
import {addCurrentResult} from '../../redux/actions/currentResultActions';
import {addCurrentAnswers} from '../../redux/actions/currentAnswerActions';
import {setTestIsReady} from '../../redux/actions/testIsReadyActions';

import TestCard from '../TestCard/TestCard';
import styles from './Test.css';

const Test = ({selectedTest, testIsready, setTestIsReady, currentAnswer, currentResult}) => {

    const onTestIsReady = () => {
        let type = 'TESTON';
        setTestIsReady(type);
    };

    const checkAnswers = () => {
        currentAnswer.includes(undefined) || currentAnswer.length !== 10
            ? alert('Вы не ответили на все вопросы!')
            : onTestIsReady();
    };

    if (testIsready) {
        return (
            // selectedTest.hasOwnProperty('module')
            // return (Object.keys(selectedTest).length
            <div className={styles.test__wrapper}>
                <Result/>
                <div className={styles.test__container}>
                    <h1 className={styles.test__module}>{selectedTest.module}</h1>
                    <h2 className={styles.test__testname}>{selectedTest['testname']}</h2>
                    <div className={styles.test__cards}>
                        {selectedTest.questions.map((q, index) =>
                            (currentResult[index])
                                ? <TestCard
                                    //clas={`${styles.testcard} ${styles.testcardCor}`}
                                    clas={2}
                                    testname={selectedTest['test-name']}
                                    index={index}
                                    question={q.question}
                                    answers={q.answers}
                                    key={`${selectedTest['test-name']}${index}`}
                                />
                                : <TestCard
                                    //clas={`${styles.answer} ${styles.answerInc}`}
                                    clas={3}
                                    testname={selectedTest['test-name']}
                                    index={index}
                                    question={q.question}
                                    answers={q.answers}
                                    key={`${selectedTest['test-name']}${index}`}
                                />
                        )}
                    </div>
                    {/*<button className={styles.test__btn}>ГОТОВО</button>*/}
                </div>
            </div>
        );
    } else {
        return (
            <div className={styles.test__wrapper}>
                <div className={styles.test__container}>
                    <h1 className={styles.test__module}>{selectedTest.module}</h1>
                    <h2 className={styles.test__testname}>{selectedTest['testname']}</h2>
                    <div className={styles.test__cards}>
                        {selectedTest.questions.map((q, index) =>
                        <TestCard
                            //clas={styles.testcard}
                            clas={1}
                            testname={selectedTest['test-name']}
                            index={index}
                            question={q.question}
                            answers={q.answers}
                            key={`${selectedTest['test-name']}${index}`}
                        />
                        )}
                    </div>
                    <button className={styles.test__btn} onClick={checkAnswers}>ГОТОВО</button>
                </div>
            </div>
        );
    }
};

function MSTP(state) {
    return {
        selectedTest: state.selectedTest,
        testIsready: state.testIsReady,
        currentAnswer: state.currentAnswer,
        currentResult: state.currentResult,

    }
}

function MDTP(dispatch) {
    return {
        // addCurrentResult: function (data, index) {
        //     dispatch(addCurrentResult(data, index))
        // },
        // addCurrentAnswers: function (data, index) {
        //     dispatch(addCurrentAnswers(data, index))
        // },
        setTestIsReady: function (type) {
            dispatch(setTestIsReady(type))
        },
    }
}

export default connect(MSTP, MDTP)(Test);