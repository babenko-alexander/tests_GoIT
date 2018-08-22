import React from 'react';
import styles from './Enter.css'
import email from './mail.svg'
import lock from './locked.svg'

const Enter = () => {
    return (
        <div className={styles.formCont}>
            <h2 className={styles.entSpan}>Вход</h2>

            <form className={styles.form}>

                <div className={styles.emCont}>
                    <img src={email} alt="e" className={styles.emSvg}/>
                    <input type='email' className={styles.input} placeholder='E-mail'/>
                </div>

                <div className={styles.lockCont}>
                    <img src={lock} alt="lock" className={styles.lockSvg}/>
                    <input type="password" className={styles.input} placeholder='Password'/>
                </div>
                
                <button type='submit' className={styles.btn}>Войти</button>
            </form>
        </div>
    );
};

export default Enter;