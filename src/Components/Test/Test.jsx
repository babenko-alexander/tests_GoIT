import React from 'react';
// import PropTypes from 'prop-types';
import Result from '../../Components/Result/Result';
import {connect} from 'react-redux';
import {setTestIsReady} from '../../redux/actions/testIsReadyActions';
import {dataResault} from '../../redux/action/actionDataResaults';

import TestCard from '../TestCard/TestCard';
import styles from './Test.css';

const Test = ({selectedTest, testIsready, setTestIsReady, currentAnswer, currentResult, dataResault, usersRateLength}) => {

    const onTestIsReady = () => {
        let type = 'TESTON';
        let persRes = {
            title: selectedTest['test-name'],
            totalQuest: 10,
            corAnswers: usersRateLength,
            sucsess: usersRateLength /10  * 100 +'%',
    };
        setTestIsReady(type);
        dataResault(persRes);
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
        usersRateLength: state.currentResult.filter(el => el === true).length,

    }
}

function MDTP(dispatch) {
    return {
        setTestIsReady: function (type) {
            dispatch(setTestIsReady(type))
        },
        dataResault: function(data){
            dispatch(dataResault(data))
        },
    }
}

export default connect(MSTP, MDTP)(Test);