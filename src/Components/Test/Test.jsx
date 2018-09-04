import React from 'react';
// import PropTypes from 'prop-types';
import Result from '../../Components/Result/Result';
import {connect} from 'react-redux';
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
            <div className={styles.test__wrapper}>
                <div className={styles.test__container}>
                    <header>
                        <h1 className={styles.test__module}>{selectedTest.module}</h1>
                        <h2 className={styles.test__testname}>{selectedTest['test-name']}</h2>
                    </header>
                    <div className={styles.test__content}>
                        <Result/>
                        <div className={styles.test__cards}>
                            {selectedTest.questions.map((q, index) =>
                                (currentResult[index])
                                    ? <TestCard
                                        clas={2}
                                        testname={selectedTest['test-name']}
                                        index={index}
                                        question={q.question}
                                        answers={q.answers}
                                        key={`${selectedTest['test-name']}${index}`}
                                    />
                                    : <TestCard
                                        clas={3}
                                        testname={selectedTest['test-name']}
                                        index={index}
                                        question={q.question}
                                        answers={q.answers}
                                        key={`${selectedTest['test-name']}${index}`}
                                    />
                            )}
                        </div>
                    </div>

                </div>
            </div>
        );
    } else {
        return (
            <div className={styles.test__wrapper}>
                <div className={styles.test__container}>
                    <h1 className={styles.test__module}>{selectedTest.module}</h1>
                    <h2 className={styles.test__testname}>{selectedTest['test-name']}</h2>
                    <div className={styles.test__cards}>
                        {selectedTest.questions.map((q, index) =>
                        <TestCard
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
        setTestIsReady: function (type) {
            dispatch(setTestIsReady(type))
        },
    }
}

export default connect(MSTP, MDTP)(Test);