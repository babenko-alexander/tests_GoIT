import React from 'react';
import {connect} from 'react-redux'
import {emailChangeHandler} from '../actions/emailChangeAction'
import { passChangeHandler} from '../actions/passChangeAction'

import {chekBoxHandler} from '../actions/checkBoxAction'
import styles from './Registration.css';
import email from './mail.svg'
import lock from './locked.svg'

const Registration = (props) => {
    
    const onChangeEm = (e) => {
        props.emailChangeHandler(e.target.value)
    }

    const onChangePass = (e) => {
        props.passChangeHandler(e.target.value)
    }
    
    return (
            <div className={styles.formCont}>
                <h2 className={styles.regSpan}>Регистрация</h2>

                <form className={styles.form}>

                <div className={styles.emCont}>
                    <img src={email} alt="e" className={styles.emSvg}/>
                    <input type='email' className={styles.input} placeholder='E-mail' value={props.emailChange} onChange={onChangeEm}/>
                </div>

                <div className={styles.lockCont}>
                    <img src={lock} alt="lock" className={styles.lockSvg}/>
                    <input type="password" className={styles.input} placeholder='Password' value={props.passChange} onChange={onChangePass}/>
                </div>
                
                <p className={styles.agreement}>
                    <label htmlFor="1">
                        <input type="checkbox" id='1' className={styles.styleCheckbox}
                        onClick={props.chekBoxHandler}/>
                    </label>
                    Регистрируясь, вы принимаете <span className={styles.orangeSp}>пользовательское соглашение</span>
                </p>
                {props.checkBoxIsActive ? 
                    <button type='submit' className={styles.btn}>Зарегистрироваться</button> : null}
                </form>
            </div> 
        )
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

        chekBoxHandler: function() {
            dispatch(chekBoxHandler())
        }
    }
}

export default connect(MSTP, MDTP) (Registration);