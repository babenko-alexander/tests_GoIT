import React from 'react';
import {connect} from 'react-redux';
import Result from '../../Components/Result/Result';
import {addCurrentResult} from '../../redux/actions/currentResultActions';
import {addCurrentAnswers} from '../../redux/actions/currentAnswerActions';
import {setTestIsReady} from '../../redux/actions/testIsReadyActions';
import {correctResultsAsync} from '../../redux/actions/currentCorrectResultActions';
import styles from './FakeTests.css';


function FakeTests(props) {

    const someArr = ['Question1', 'Question2', 'Question3', 'Question4', 'Question5', 'Question6', 'Question7', 'Question8', 'Question9', 'Question10'];
    // let data = ['', '', '', '', '', '', '', '', '', ''];

    // componentDidMount() {
    //     correctResultsAsync();
    // }

    const onTestIsReady = () => {
        let type = 'TESTON';
        props.setTestIsReady(type);
    };

    const checkAnswers = () => {
        // props.correctResultsAsync();
        props.currentAnswer.includes(undefined) || props.currentAnswer.length !== 10
            ? alert('Вы не ответили на все вопросы!')
            : onTestIsReady();

        // console.log(props.currentAnswer.includes(undefined))
        // props.resToProps([false, false, true, true, false, false, true, true, false, false]);
        // for (let item of props.currentResult) {
        //     (item === props.correctResult[index]) ? true : false);
        // }
        // setUsersRate(data);
        // console.log(props.usersRate);

    };

    const addCurrentAnswers = (e) => {
        // props.correctResultsAsync();
        // e.preventDefault();
        // data[e.target.dataset.index] = e.target.value;
        props.addCurrentAnswers(e.target.value, e.target.dataset.index);

        let data;
        (e.target.value === props.correctResult[e.target.dataset.index]) ? data = true : data = false;
        props.addCurrentResult(data, e.target.dataset.index);
    };


    if (props.testIsready) {
        return (
            <div className={styles.testsContainer}>
                <Result/>
                <div className={styles.answersContainer}>
                    {someArr.map((el, ind) =>
                        (props.currentResult[ind])
                                ? <div className={`${styles.answer} ${styles.answerCor}`}>
                                : <div className={`${styles.answer} ${styles.answerInc}`}>


                                        <h2>{el}</h2>
                                        <form method='post' onChange={addCurrentAnswers} className={styles.answers__form}>
                                            <label id={`${el}1`}><input type="radio" name='answer' value='answer1'
                                                                        id={`${el}1`}
                                                                        data-index={ind}/>answer1</label>
                                            <label id={`${el}2`}><input type="radio" name='answer' value='answer2'
                                                                        id={`${el}2`}
                                                                        data-index={ind}/>answer2</label>
                                            <label id={`${el}3`}><input type="radio" name='answer' value='answer3'
                                                                        id={`${el}3`}
                                                                        data-index={ind}/>answer3</label>
                                            <label id={`${el}4`}><input type="radio" name='answer' value='answer4'
                                                                        id={`${el}4`}
                                                                        data-index={ind}/>answer4</label>
                                        </form>
                                    </div>
                </div>
                <button onClick={checkAnswers} className={styles.answersBtn}>ГОТОВО</button>
            </div>
        );
    } else {
        return (
            <div className={styles.testsContainer}>
                <div className={styles.answersContainer}>
                    {someArr.map((el, ind) => <div className={styles.answer}>
                            <h2>{el}</h2>
                            <form method='post' onChange={addCurrentAnswers} className={styles.answers__form}>
                                <label id={`${el}1`}><input type="radio" name='answer' value='answer1' id={`${el}1`}
                                                            data-index={ind}/>answer1</label>
                                <label id={`${el}2`}><input type="radio" name='answer' value='answer2' id={`${el}2`}
                                                            data-index={ind}/>answer2</label>
                                <label id={`${el}3`}><input type="radio" name='answer' value='answer3' id={`${el}3`}
                                                            data-index={ind}/>answer3</label>
                                <label id={`${el}4`}><input type="radio" name='answer' value='answer4' id={`${el}4`}
                                                            data-index={ind}/>answer4</label>
                            </form>
                        </div>
                    )}
                </div>
                <button onClick={checkAnswers} className={styles.answersBtn}>ГОТОВО</button>
            </div>
        );
    }

}

function MSTP(state) {
    return {
        currentResult: state.currentResult,
        currentAnswer: state.currentAnswer,
        correctResult: state.correctResult,
        testIsready: state.testIsReady,
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
        setTestIsReady: function (type) {
            dispatch(setTestIsReady(type))
        },
        correctResultsAsync: function () {
            dispatch(correctResultsAsync())
        },
    }
}

export default connect(MSTP, MDTP)(FakeTests);