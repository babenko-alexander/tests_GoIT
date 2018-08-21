/*eslint-disable*/
import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import logo from './logo.svg'
import styles from './Header.css';


const Header = () => {

    return (
        <div className={styles.header__container}>
            <img src={logo} alt="logo"/>
            <a href="/" className={styles.header__logo}><NavLink exact to='/'>FunTest</NavLink></a>
            <ul className={styles.header__menu}>
                <li className={styles.header__item}><NavLink to='/signin'>sign in</NavLink></li>
                <li className={styles.header__item}><NavLink to='/create_account'>create an account</NavLink></li>
                <li className={styles.header__item}><NavLink to='/view_profile'>view profile</NavLink></li>
                <li className={styles.header__item}><NavLink to='/ratings'>ratings</NavLink></li>
                <li className={styles.header__item}><NavLink to='/logout'>logout</NavLink></li>
            </ul>
        </div>
    )
}

export default Header;