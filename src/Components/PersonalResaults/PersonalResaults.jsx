import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PersonalResaults.css';
import PersonalCard from './PersonalCard/PersonalCard';
import {getDataAsync} from '../../redux/action/actionDataResaults';
import {connect} from 'react-redux';
import {totalResaults, percentResaults} from '../../redux/selectors/totalResaults';
import sad from '../PersonalResaults/PersonalCard/images/sad.svg';
import weird from '../PersonalResaults/PersonalCard/images/weird.svg';
import smile from '../PersonalResaults/PersonalCard/images/smile.svg';


class PersonalResaults extends Component {

    componentDidMount(){
        this.props.getDataAsync();
    }

    render() {
        const {dataResault, total, percent} = this.props;
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
                            <th>Итог</th>
                            <th className={styles.robotoOrange}>Средний : {total}</th>
                            <th className={styles.robotoOrange}>
                            {percent <= 50 ? 
                                <div className={styles.flex}><span className={styles.red}>{percent}% </span><img src={sad} alt="sad" className={styles.svg}/></div>: 
                            percent > 50 && percent <= 70 ?    
                               <div className={styles.flex}> <span className={styles.yellow}>{percent}% </span><img src={weird} alt="weird" className={styles.svg}/></div>:
                            percent >= 80 ?
                                 <div className={styles.flex}><span className={styles.green}>{percent}% </span><img src={smile} alt="smile" className={styles.svg}/></div>:
                            percent }
                            </th>
                        </tr>
                        </tbody>    
                        
                </table>
            <style>@import url('https://fonts.googleapis.com/css?family=Roboto:300');</style>
            </div>
        );
    }
}

PersonalResaults.propTypes = {
    total: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
};

function mSTP (store) {
    return {
        dataResault: store.dataResaults,
        total: totalResaults(store),
        percent: percentResaults(store),
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