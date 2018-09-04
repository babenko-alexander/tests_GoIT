import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {emailChangeHandler} from '../../redux/actions/emailChangeAction';
import { passChangeHandler} from '../../redux/actions/passChangeAction';
import {chekBoxHandler} from '../../redux/actions/checkBoxAction';
import Modal from '../ModalChild/ModalChild';
import styles from './Registration.css';
import email from './mail.svg';
import lock from './locked.svg';
import {showRegistration} from '../../redux/actions/registrationAction';
import {agreementOn} from '../../redux/actions/agreementAction';

const Registration = (props) => {
    
    const onChangeEm = (e) => {
        props.emailChangeHandler(e.target.value)
    };

    const onChangePass = (e) => {
        props.passChangeHandler(e.target.value)
    };

    const closeRegModal = (e) => {
        e.stopPropagation();
        if (e.target.id === 'overlay' || e.target.id === 'closeSymbol') {
            props.chekBoxHandler()
            props.showAgr()
            props.closeRegModal()
        }
    };




    const valPass = () => {
        return props.passChange.length >= 6 && props.passChange.length <= 10
    };

    const valMail = () => {
        let loginReg = /@/g

        return loginReg.test(props.emailChange)
    };

    const sumCheck = () => {
        if(valPass() && valMail()) {
            const result = {
                email: props.emailChange,
                password: props.passChange
            }
            console.log(result);//make post

        } else {
            console.log('err');
        }
    };

    const submit = (e) => {
        e.preventDefault()
        sumCheck()
        props.closeRegModal();
    };
    
    return (
        
        <div>
            {props.showAgreement ?    
                <Modal closeModal={closeRegModal}>
                {/* <span>Назад</span> */}
                <h2 className={styles.regSpan}>Пользовательское соглашение</h2>
                <p className={styles.agreement}>
                    Условия пользовательского соглашения, обязательны для любого лица находящегося на сайте www.moldovenii.md. Если Вы не согласны с условиями пользовательского соглашения (полностью или в части) просим немедленно покинуть сайт www.moldovenii.md. Нахождение лица на сайте рассматривается как принятие пользователем всех условий пользовательского соглашения. Настоящее соглашение, а также изменения и дополнения к нему вступают в силу с момента их опубликования на Ресурсе.
                </p>
                </Modal>                
                :   
                <Modal closeModal={closeRegModal}>
                    <h2 className={styles.regSpan}>Регистрация</h2>

                    <form className={styles.form} onSubmit={submit}>

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
                        Регистрируясь, вы принимаете <span className={styles.orangeSp} onClick={props.showAgr}>пользовательское соглашение</span>
                        </p>
                        {props.checkBoxIsActive ? 
                            <button type='submit' className={styles.btn}>Зарегистрироваться</button> 
                            : null
                        }
                    </form>
                </Modal>
                
            }
        </div>
    )
};

function MSTP (state) {
    return {
        emailChange: state.emailChange,
        passChange: state.passChange,
        checkBoxIsActive: state.checkBoxIsActive,
        showAgreement: state.showAgreement
    }
};

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
        },

        closeRegModal: function() {
            dispatch(showRegistration())
        },



        showAgr: function() {
            dispatch(agreementOn())
        }
    }
};

export default connect(MSTP, MDTP) (Registration);