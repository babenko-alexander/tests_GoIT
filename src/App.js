import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import MessageBox from './Components/MessageBox/MessageBox';
import Header from './Components/Header/Header';
import Registration from './Components/Registration/Registration';
import Main from './Components/Main/Main';
import Test from './Components/Test/Test';
import Enter from './Components/Enter/Enter';
import PersonalResults from './Components/PersonalResults/PersonalResults';

import {fetchModulesDataAsync} from './redux/actions/modulesAction';
import {fetchAllTestsDataAsync} from './redux/actions/testsAction';
import {addCurrentCorrectResult} from './redux/actions/currentCorrectResultActions';
import {showEnter} from './redux/actions/enterAction';
import {showRegistration} from './redux/actions/registrationAction';
import {isLogin} from './redux/actions/isLogin';
import {getUserAuthHeader, getUserId, validateUser} from './helpers/userValidation';
import {dataResult} from './redux/actions/actionDataResults';

import styles from './App.css';


class App extends Component {

    componentDidMount() {
        if (validateUser()) {
            this.props.isLogin();
            axios.get(`/users/${getUserId()}`, getUserAuthHeader()).then(data=>{console.log(data); return this.props.dataResultFunc(data.data.results)} )
        }

        this.props.loadModulesDataAsync();
        this.props.loadAllTestsDataAsync();


    };

    componentDidUpdate() {
        const testIsSelected = Object.keys(this.props.selectedTest).length > 0;

        if (testIsSelected) {
            let correctAnswerData = this.props.selectedTest.questions.map(el => el.rightAnswer);
            this.props.addCurrentCorrectResult(correctAnswerData)
        }
    };

    render() {
        const testIsSelected = Object.keys(this.props.selectedTest).length > 0;

        return (
            <div className={styles.App}>
                {/* TODO: use routes instead */}
                <Header/>
                {testIsSelected ? <Test/> : <Main/>}
                {/*<button id='enter' onClick={this.props.showEnter}>Вход</button>*/}
                {/*<button id='reg' onClick={this.props.showRegistration}>Регистрация</button>*/}
                {/* <Registration/> */}
                {/* <Enter/> */}

                {this.props.enter && <Enter/>}
                {this.props.registration && <Registration/>}
                {this.props.messageText && <MessageBox/>}
                {this.props.resultIsActive &&  <PersonalResults/>}
            </div>
        );
    }
}


function MSTP(state) {
    return {
        tests: state.tests,
        selectedTest: state.selectedTest,

        enter: state.enter,
        registration: state.registration,

        resultIsActive: state.resultIsActive,
        messageText: state.messageText

    }
}

function MDTP(dispatch) {
    return {
        loadModulesDataAsync: function() {
            dispatch(fetchModulesDataAsync())
        },
        loadAllTestsDataAsync: function() {
            dispatch(fetchAllTestsDataAsync())
        },
        addCurrentCorrectResult: function (data) {
            dispatch(addCurrentCorrectResult(data))
        },

        showEnter: function() {
            dispatch(showEnter())
        },
        showRegistration: function() {
            dispatch(showRegistration())
        },
        isLogin: function () {
            dispatch(isLogin())
        },
        dataResultFunc: function(data){
            dispatch(dataResult(data))
        },
    }
}

export default connect(MSTP, MDTP)(App);
