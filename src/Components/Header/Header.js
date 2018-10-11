import React from 'react';
import {connect} from 'react-redux';
import {resultSelected, resultUnSelected} from '../../redux/actions/resultPageActions';
import {showEnter} from '../../redux/actions/enterAction';
import {showRegistration} from '../../redux/actions/registrationAction';
import {isLogout} from '../../redux/actions/isLogin';
import logo from './logo.svg';
import styles from './Header.css';
import {unSelectedTest} from '../../redux/actions/selectedTestAction';

const Header = (props) => {

    const logOut = function() {
        props.logoutHandler();
        props.resultPageOff();
    };

    return (
        <div>
            {props.checkLogin ?
                <div className={styles.header__container}>
                <div className={styles['header__main-nav-link']} onClick={props.resultUnSelected}>
                    <img src={logo} alt="logo" className={styles['header__logo']}/>
                </div>
                <ul className={styles['header__menu-nav-links']}>
                    <li className={styles.header__item}>
                        <div className={styles['header__item-nav']} onClick={props.resultSelected}>Рейтинги</div>
                    </li>
                    <li className={styles.header__item}>
                        <div className={styles['header__item-nav']} onClick={logOut}>Выйти</div>
                    </li>
                </ul>
                </div>

                :
                <div className={styles.header__container}>
                <span className={styles.test}>Tests</span>
                <div className={styles['header__menu-buttons']}>
                    <button className={styles.header__button} onClick={props.showRegistration}>Регистрация</button>
                    <button className={styles['header__button']+' '+styles['header__margine-right']} onClick={props.showEnter}>Вход</button>
                </div>
                </div>
            }
        </div>
    )
};

function MSTP(state) {
    return {
        checkLogin: state.isLogin,
    }
}

function MDTP(dispatch) {
    return {
        resultPageOff: function () {
            dispatch(resultUnSelected());
        },
        logoutHandler: function() {
            // dispatch(resultUnSelected());
            dispatch(isLogout());
            // dispatch(unSelectedTest())
        },

        showEnter: function() {
            dispatch(showEnter())
        },
      
        showRegistration: function() {
            dispatch(showRegistration())
        },

        resultSelected : function() {
            dispatch(unSelectedTest());
            dispatch(resultSelected())
        },

        resultUnSelected : function() {
            dispatch(resultUnSelected());
            dispatch(unSelectedTest())
        }
    }
}

export default connect(MSTP, MDTP)(Header);