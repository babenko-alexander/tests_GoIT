import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import {setTestIsReady} from '../../redux/actions/testIsReadyActions';
import {addCurrentAnswers} from '../../redux/actions/currentAnswerActions';
import {setSelectedTest} from '../../redux/actions/testActions';
import styles from './Result.css';

function Result(props) {

    const offTestIsReady = () => {
        let type = 'TESTOFF';
        props.setTestIsReady(type);
        props.currentAnswer.map((el, i) => props.addCurrentAnswers(undefined, i));
        props.setSelectedTest();
    };

    return (
        <div className={styles.result__container}>
            {/*<span onClick={offTestIsReady} className={styles.result__x}>x</span>*/}
            <div className={styles.result__content}>
                <h2 className={styles.result__header}>Результат:</h2>
                <ul className={styles.result__list}>
                    <li className={styles.result__item}>Вопросов: 10</li>
                    <li className={styles.result__item}>{`Правильных: ${props.usersRateLength}`}</li>
                    <li className={styles.result__item}>{`Успех: ${props.usersRateLength}0%`}</li>
                </ul>
            </div>
            <button onClick={offTestIsReady} className={styles.result__btn}>Выйти</button>
        </div>
    );
}

function MSTP(state) {
    return {
        currentAnswer: state.currentAnswer,
        usersRateLength: state.currentResult.filter(el => el === true).length,
    }
}

function MDTP(dispatch) {
    return {
        setTestIsReady: function (type) {
            dispatch(setTestIsReady(type))
        },
        addCurrentAnswers: function (data, index) {
            dispatch(addCurrentAnswers(data, index))
        },
        setSelectedTest: function() {
            dispatch(setSelectedTest(null))
        },
    }
}

// Result.propTypes = {};
// Result.defaultProps = {};

export default connect (MSTP, MDTP)(Result);
