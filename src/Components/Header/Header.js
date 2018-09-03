/*eslint-disable*/
import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, NavLink} from 'react-router-dom';
import logo from './logo.svg'
import styles from './Header.css';


const Header = (props) => {

    return (
        <div className={styles.header__container}>

        <NavLink exact to='/' className={styles['header__main-nav-link']}>
            <img src={logo} alt="logo" className={styles['header__logo']}/>
            Fun Test
        </NavLink>

        {/* <div className={showMenu ? 'header__menu-show header__menu' : 'header__menu'} > */}
            {props.checkLogin ?
                <ul className={styles['header__menu-nav-links']}>
                    <li className={styles.header__item}><NavLink className={styles['header__item-nav']} to='/view_profile'>view profile</NavLink></li>
                    <li className={styles.header__item}><NavLink className={styles['header__item-nav']} to='/ratings'>ratings</NavLink></li>
                    <li className={styles.header__item}><NavLink className={styles['header__item-nav']} to='/logout'>logout</NavLink></li>
                </ul>
                :
                <div className={styles['header__menu-buttons']}>
                    <button className={styles['header__button']+' '+styles['header__margine-right']}>sign in</button>
                    <button className={styles.header__button}>create an account</button>
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
        }

    }
}

export default connect(MSTP, MDTP)(Header);