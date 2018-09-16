import React from 'react';
import Modal from '../ModalChild/ModalChild';
import styles from './Enter.css';
import email from './mail.svg';
import lock from './locked.svg';
import {emailChangeHandler} from '../../redux/actions/emailChangeAction';
import {passChangeHandler} from '../../redux/actions/passChangeAction';
import {showEnter} from '../../redux/actions/enterAction';
import {connect} from 'react-redux';
import axios from "axios/index";

const Enter = (props) => {

    const closeEntModal = (e) => {
        e.stopPropagation();
        if (e.target.id === 'overlay' || e.target.id === 'closeSymbol') {
            props.closeEntModal()
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
            .then(result => {console.log(result); return result})
            .then(token => sessionStorage.setItem('token', token))
            .catch(err => console.log(err))
    };

    const submit = (e) => {
        e.preventDefault();
        post();
        props.closeEntModal();
    };

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
                
                <button type='submit' className={styles.btn}>Войти</button>
            </form>
        </Modal>
    );
};

function MSTP (state) {
    return {
        emailChange: state.emailChange,
        passChange: state.passChange,
        checkBoxIsActive: state.checkBoxIsActive,
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

        closeEntModal: function() {
            dispatch(showEnter())
        }
    }
}

export default connect(MSTP, MDTP) (Enter);