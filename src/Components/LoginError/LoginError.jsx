import React from 'react';
import styles from './LoginError.css';
const LoginError = ({showError}) => {
    console.log(showError);
    return (
        <div>
             <span className={showError ? styles.showError : styles.hiddenError}>
                    Неправильный логин или пароль
                </span>
        </div>
    );
};



export default LoginError;
