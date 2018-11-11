import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import axios from "axios/index";
import Modal from '../ModalChild/ModalChild';
import MessageBox from '../MessageBox/MessageBox';
import styles from './Enter.css';
import email from './mail.svg';
import lock from './locked.svg';
import {emailChangeHandler} from '../../redux/actions/emailChangeAction';
import {passChangeHandler} from '../../redux/actions/passChangeAction';
import {isLogin} from '../../redux/actions/isLogin';
import {closeModal} from '../../redux/actions/enterAction';
import {emailChangeClear} from '../../redux/actions/emailChangeAction';
import {passChangeClear} from '../../redux/actions/passChangeAction';
import {getUserAuthHeader, getUserId} from "../../helpers/userValidation";
import {dataResult} from '../../redux/actions/actionDataResults';
import {clearMessageText, setMessageText} from '../../redux/actions/messageTextActions';


const Enter = (props) => {

    const modalCloseStateClear = () => {
        props.closeModalFunc();
        props.emailChangeClearFunc();
        props.passChangeClearFunc();
        props.clearMessageTextFunc();
    };

    const closeEntModal = (e) => {
        e.stopPropagation();
        if (e.target.id === 'overlay' || e.target.id === 'closeSymbol') {
            modalCloseStateClear();
        }
    };

    const onChangeEm = (e) => {
        props.emailChangeHandler(e.target.value)
    };

    const onChangePass = (e) => {
        props.passChangeHandler(e.target.value)
    };

    const post = () => {
        const result = {
            email: props.emailChange,
            password: props.passChange,
            withCredentials: true
        };
        // console.log(result);
        axios.post('/users/login', result)
            .then(result => result.status === 200 ? result.data : null)
            // .then(result => {console.log(result); return result})
            .then(result => localStorage.setItem('token', result.token))
            .then(() => props.loginHandler())
            .then(() => modalCloseStateClear())
            .then(()=> axios.get(`/users/${getUserId()}`, getUserAuthHeader()).then(data=>{console.log(data); return props.dataResultFunc(data.data.results)} ))
            .catch(err => {console.log(err); props.setMessageTextFunc('Неправильный логин или пароль')})

    };

    const submit = (e) => {
        e.preventDefault();

        // debugger
        post();

    };

    // const doLogin = () => validateUser() ? props.loginHandler() : null;

    return (
        <Modal closeModal={closeEntModal}>
            <h2 className={styles.entSpan}>Вход</h2>

            <form className={styles.form} onSubmit={submit}>

                <div className={styles.emCont}>
                    <img src={email} alt="e" className={styles.emSvg}/>
                    <input type='email' className={styles.input} onChange={onChangeEm} placeholder='E-mail'/>
                </div>

                <div className={styles.lockCont}>
                    <img src={lock} alt="lock" className={styles.lockSvg}/>
                    <input type="password" className={styles.input} onChange={onChangePass} placeholder='Password'/>
                </div>

                <button type='submit' className={styles.btn}><NavLink to="/tests">Войти</NavLink></button>
            </form>
        </Modal>
    );
};

function MSTP (state) {
    return {
        emailChange: state.emailChange,
        passChange: state.passChange,
        checkBoxIsActive: state.checkBoxIsActive,
        messageText: state.messageText
    }
}

function MDTP (dispatch) {
    return {
        emailChangeHandler: function(value) {
            dispatch(emailChangeHandler(value))
        },
        passChangeHandler: function(value) {
            dispatch(passChangeHandler(value))
        },
        loginHandler: function() {
            dispatch(isLogin())
        },
        setMessageTextFunc: function (message) {
            dispatch(setMessageText(message))
        },
        clearMessageTextFunc: function () {
            dispatch(clearMessageText())
        },
        closeModalFunc: function () {
            dispatch(closeModal())
        },
        emailChangeClearFunc: function () {
            dispatch(emailChangeClear())
        },
        passChangeClearFunc: function () {
            dispatch(passChangeClear())
        },
        dataResultFunc: function(data){
            dispatch(dataResult(data))
        },
    }
}

export default connect(MSTP, MDTP) (Enter);