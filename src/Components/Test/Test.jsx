import React from 'react';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';
import axios from 'axios';
import Result from '../../Components/Result/Result';
import TestCard from '../TestCard/TestCard';
import {setTestIsReady, unsetTestIsReady} from '../../redux/actions/testIsReadyActions';
import {dataResult} from '../../redux/actions/actionDataResults';
import {getUserAuthHeader, getUserId} from '../../helpers/userValidation';
import {addCurrentAnswers} from "../../redux/actions/currentAnswerActions";
import {setSelectedTest, unSelectedTest} from "../../redux/actions/selectedTestAction";

import styles from './Test.css';


const Test = ({selectedTest, unSelectedTest, testIsready, setTestIsReadyFunc, unsetTestIsReadyFunc, currentAnswer, currentResult, dataResult, usersRateLength, dataResults}) => {


    const  saveUserTestResultToServer = (persRes) => {
        axios.put(`/users/${getUserId()}`, {results: [...dataResults.filter(el => el.testid !== persRes.testid), persRes]}, getUserAuthHeader())
            // .then(() => dataResult([persRes]))
            .catch(err => console.log(err) )
    };

    const offTestIsReady = () => {
        unsetTestIsReadyFunc();
        currentAnswer.map((el, i) => addCurrentAnswers(undefined, i));
        unSelectedTest();
    };

    let persRes = {};

    const onTestIsReady = () => {
         persRes = {
            testid: selectedTest._id,
            title: selectedTest.testname,
            totalQuest: 10,
            corAnswers: usersRateLength,
            success: usersRateLength /10  * 100 +'%',
    };

        setTestIsReadyFunc();
        // dataResult(persRes);
        saveUserTestResultToServer(persRes)
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
                    <button className={styles.test__btn} onClick={offTestIsReady}>ОТМЕНА</button>
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
        dataResults: state.dataResults,
    }
}

function MDTP(dispatch) {
    return {
        setTestIsReadyFunc: function () {
            dispatch(setTestIsReady())
        },
        unsetTestIsReadyFunc: function () {
            dispatch(unsetTestIsReady())
        },
        dataResult: function(data){
            dispatch(dataResult(data))
        },
        addCurrentAnswers: function (data, index) {
            dispatch(addCurrentAnswers(data, index))
        },
        setSelectedTest: function() {
            dispatch(setSelectedTest(null))
        },
        unSelectedTest: function() {
            dispatch(unSelectedTest())
        },
    }
}

export default connect(MSTP, MDTP)(Test);