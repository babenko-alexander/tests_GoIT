import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PersonalResaults.css';
import PersonalCard from './PersonalCard/PersonalCard';
import {dataResault} from '../../redux/action/actionDataResaults';
import {connect} from 'react-redux';

class PersonalResaults extends Component {

    componentDidMount(){
        this.props.dataResault();
    }

    render() {
    const obj = [{name: 'CSS', age:10, el: 20}, 
    {name: 'HTML', age:10, el: 20}, 
    {name: 'REACT', age:10, el: 20}, 
    {name: 'AlexAlexAlexAlex', age:10, el: 20}, 
    {name: 'AlexAlexAlexAlex', age:10, el: 20}, 
    {name: 'AlexAlexAlexAlex', age:10, el: 20},]
        return (
            
            <div className={styles.wrapper}>
                <table className={styles.container} cellSpacing="0">
                <tbody>
                <tr >
                    <th className={styles.resaultText} >Результаты тестов</th>
                </tr>
                        <tr >
                           <th className={styles.robotoOrange}>Название</th>
                            <th className={styles.robotoOrange}>Результаты</th>
                            <th className={styles.robotoOrange}>Средний бал по всем пользователям</th>
                        </tr>
                        {obj.map(el => <PersonalCard name={el.name} />)}
                        </tbody>    
                        
                </table>
            <style>@import url('https://fonts.googleapis.com/css?family=Roboto:300');</style>
            </div>
        );
    }
}

PersonalResaults.propTypes = {

};

function mSTP (store) {
    return {
        dataResault: store.dataResaults,
    }
}

function mDTP (dispatch) {
    return {
        dataResault : function (){
            dispatch(dataResault())
        }
    }
}


export default connect(mSTP, mDTP)(PersonalResaults);