/*eslint-disable*/
import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, NavLink} from 'react-router-dom';
import {showEnter} from '../../redux/actions/enterAction'
import {showRegistration} from '../../redux/actions/registrationAction'
import logo from './logo.svg'
import styles from './Header.css';


const Header = (props) => {

    return (
        <div>
        {/* <div className={showMenu ? 'header__menu-show header__menu' : 'header__menu'} > */}
            {props.checkLogin ?
                <div className={styles.header__container}>
                <NavLink exact to='/' className={styles['header__main-nav-link']}>
                <img src={logo} alt="logo" className={styles['header__logo']}/>
                </NavLink>
                <ul className={styles['header__menu-nav-links']}>
                    <li className={styles.header__item}>
                        <NavLink className={styles['header__item-nav']} to='/view_profile'>view profile</NavLink>
                    </li>
                    <li className={styles.header__item}>
                        <NavLink className={styles['header__item-nav']} to='/ratings'>ratings</NavLink>
                    </li>
                    <li className={styles.header__item}>
                        <NavLink className={styles['header__item-nav']} to='/logout'>logout</NavLink>
                    </li>
                </ul>
                </div>
                :
                <div className={styles.header__container}>
                <span className={styles.test}>Test</span>
                <div className={styles['header__menu-buttons']}>
                    <button className={styles.header__button} onClick={props.showRegistration}>Регистрация</button>
                    <button className={styles['header__button']+' '+styles['header__margine-right']} onClick={props.showEnter}>Вход</button>
                </div>
                </div>
            }
        </div>
        // </div>
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
            dispatch(isLogin());
        },
        showEnter: function() {
            dispatch(showEnter())
        },
      
        showRegistration: function() {
            dispatch(showRegistration())
        }
    }
}

export default connect(MSTP, MDTP)(Header);