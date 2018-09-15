import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, NavLink} from 'react-router-dom';
import {resultSelected, resultUnSelected} from '../../redux/actions/resultPageActions';
import {showEnter} from '../../redux/actions/enterAction';
import {showRegistration} from '../../redux/actions/registrationAction';
import {isLogin} from '../../redux/actions/isLogin';
import logo from './logo.svg';
import styles from './Header.css';
import {unSelectedTest} from '../../redux/actions/testActions';


const Header = (props) => {

    return (
        <div>
            {props.checkLogin ?
                <div className={styles.header__container}>
                <NavLink exact to='/' className={styles['header__main-nav-link']} onClick={props.resultUnSelected}>
                    <img src={logo} alt="logo" className={styles['header__logo']}/>
                </NavLink>
                <ul className={styles['header__menu-nav-links']}>
                    <li className={styles.header__item}>
                        <NavLink className={styles['header__item-nav']} to='/ratings' onClick={props.resultSelected}>Рейтинги</NavLink>
                    </li>
                    <li className={styles.header__item}>
                        <NavLink className={styles['header__item-nav']} to='/logout' onClick={props.wasLogin}>Выйти</NavLink>
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
        wasLogin: function () {
            dispatch(resultUnSelected());
            dispatch(isLogin());
            dispatch(unSelectedTest())

        },
        showEnter: function() {
            dispatch(showEnter())
        },
      
        showRegistration: function() {
            dispatch(showRegistration())
        },

        resultSelected : function() {
            dispatch(unSelectedTest())
            dispatch(resultSelected())
        },

        resultUnSelected : function() {
            dispatch(resultUnSelected())
            dispatch(unSelectedTest())
        },
        unSelectedText: function () {
            dispatch(unSelectedTest())
        }
    }
}

export default connect(MSTP, MDTP)(Header);