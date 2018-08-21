/*eslint-disable*/
import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, NavLink} from 'react-router-dom';
import logo from './logo.svg'
import styles from './Header.css';


const Header = (props) => {

    return (
        <div className={styles.header__container}>

            <a href="/" className={styles.header__logo}>
                <NavLink exact to='/'><img src={logo} alt="logo"/>FunTest</NavLink></a>
            {props.checkLogin ?
                <ul className={styles['header__menu-navlinks']}>
                    <li className={styles.header__item}><NavLink to='/view_profile'>view profile</NavLink></li>
                    <li className={styles.header__item}><NavLink to='/ratings'>ratings</NavLink></li>
                    <li className={styles.header__item}><NavLink to='/logout'>logout</NavLink></li>
                </ul>
                :
                <div className={styles['header__menu-buttons']}>
                    <button className={styles.header__button}>sign in</button>
                    <button className={styles.header__button}>create an account</button>
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
            dispatch(isLogin());
        }

    }
}

export default connect(MSTP, MDTP)(Header);