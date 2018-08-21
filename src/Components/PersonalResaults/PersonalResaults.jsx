import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PersonalResaults.css';
import PersonalCard from './PersonalCard/PersonalCard';
import {getDataAsync} from '../../redux/action/actionDataResaults';
import {connect} from 'react-redux';
import {totalResaults} from '../../redux/selectors/totalResaults';


class PersonalResaults extends Component {

    componentDidMount(){
        this.props.getDataAsync();
    }

    render() {
        const {dataResault} = this.props;
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
                        {dataResault.map(el => <PersonalCard name={el.name} result={el.result} ratio={el.ratio} id={el.id} key={el.id}/>)}
                        <tr>
                            <th>{this.props.total}</th>
                        </tr>
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
        total: totalResaults(store),
    }
}

function mDTP (dispatch) {
    return {
        getDataAsync : function (){
            dispatch(getDataAsync())
        }
    }
}


export default connect(mSTP, mDTP)(PersonalResaults);