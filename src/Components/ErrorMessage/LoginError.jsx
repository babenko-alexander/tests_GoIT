import React from 'react';
import styles from './LoginError.css';
const ErrorMessage = ({showError}) => {
    console.log(showError);
    return (
        <div>
             <span className={showError ? styles.showError : styles.hiddenError}>
                    Неправильный логин или пароль
                </span>
        </div>
    );
};



export default ErrorMessage;
