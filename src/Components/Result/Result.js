import React from 'react';
import { connect } from 'react-redux';
import {setTestIsReady} from '../../redux/actions/testIsReadyActions';
// import PropTypes from 'prop-types';
import styles from './Result.css';

function Result(props) {

    const offTestIsReady = () => {
        let type = 'TESTOFF';
        props.setTestIsReady(type);
    };

    return (
        <aside>
            <div className={styles.result__container}>
                <span onClick={offTestIsReady} className={styles.result__x}>x</span>
                <h2 className={styles.result__header}>Результат:</h2>
                <ul className={styles.result__list}>
                    <li className={styles.result__item}>Вопросов: 10</li>
                    <li className={styles.result__item}>{`Правильных: ${props.usersRateLength}`}</li>
                    <li className={styles.result__item}>{`Успех: ${props.usersRateLength}0%`}</li>
                </ul>
                <button onClick={offTestIsReady} className={styles.result__btn}>Выйти</button>
            </div>
        </aside>
    );
}

function MSTP(state) {
    return {
        usersRateLength: state.currentResult.filter(el => el === true).length,
    }
}

function MDTP(dispatch) {
    return {
        setTestIsReady: function (type) {
            dispatch(setTestIsReady(type))
        },
    }
}

// Result.propTypes = {};
// Result.defaultProps = {};

export default connect (MSTP, MDTP)(Result);
