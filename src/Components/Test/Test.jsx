import React from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import Result from '../../Components/Result/Result';
import {connect} from 'react-redux';
import {setTestIsReady} from '../../redux/actions/testIsReadyActions';
import {dataResault} from '../../redux/actions/actionDataResaults';
import {getUserAuthHeader, getUserId} from '../../helpers/userValidation';

import TestCard from '../TestCard/TestCard';
import styles from './Test.css';

const Test = ({selectedTest, testIsready, setTestIsReady, currentAnswer, currentResult, dataResault, usersRateLength}) => {


    const saveUserTestResultToServer = (persRes) => {
        console.log(persRes, getUserId(), getUserAuthHeader());
        axios.put(`/users/${getUserId()}`, getUserAuthHeader(), persRes)
            .catch(err => console.log(err) )
    };

    let persRes = {};

    const onTestIsReady = () => {
        let type = 'TESTON';
         persRes = {
            testid: selectedTest._id,
            title: selectedTest.testname,
            totalQuest: 10,
            corAnswers: usersRateLength,
            sucsess: usersRateLength /10  * 100 +'%',
    };
        setTestIsReady(type);
        dataResault(persRes);
        saveUserTestResultToServer(persRes);
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
                        <h2 className={styles.test__testname}>{selectedTest.testname}</h2>
                    </header>
                    <div className={styles.test__content}>
                        <Result/>
                        <div className={styles.test__cards}>
                            {selectedTest.questions.map((q, index) =>
                                (currentResult[index])
                                    ? <TestCard
                                        clas={2}
                                        testname={selectedTest.testname}
                                        index={index}
                                        question={q.question}
                                        answers={q.answers}
                                        key={`${selectedTest.testname}${index}`}
                                    />
                                    : <TestCard
                                        clas={3}
                                        testname={selectedTest.testname}
                                        index={index}
                                        question={q.question}
                                        answers={q.answers}
                                        key={`${selectedTest.testname}${index}`}
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
                    <h2 className={styles.test__testname}>{selectedTest.testname}</h2>
                    <div className={styles.test__cards}>
                        {selectedTest.questions.map((q, index) =>
                        <TestCard
                            clas={1}
                            testname={selectedTest.testname}
                            index={index}
                            question={q.question}
                            answers={q.answers}
                            key={`${selectedTest.testname}${index}`}
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