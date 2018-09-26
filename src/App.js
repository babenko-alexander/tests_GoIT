import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import {fetchModulesDataAsync} from './redux/actions/modulesAction';
import {fetchAllTestsDataAsync} from './redux/actions/testsAction';
import {addCurrentCorrectResult} from './redux/actions/currentCorrectResultActions';
import Header from './Components/Header/Header';
import Registration from './Components/Registration/Registration';
import Main from './Components/Main/Main';
import Test from './Components/Test/Test';
import Enter from './Components/Enter/Enter';
import PersonalResaults from './Components/PersonalResaults/PersonalResaults';
import {showEnter} from './redux/actions/enterAction';
import {showRegistration} from './redux/actions/registrationAction';
import {isLogin} from './redux/actions/isLogin';

import styles from './App.css';


class App extends Component {

    parseJWT() {
        let token = localStorage.getItem('token');
        if (token) {
            let base64 = token.split('.')[1];
            let parsedToken = JSON.parse(window.atob(base64));
            // console.log('parsedToken: ', parsedToken);
            return parsedToken;
        } else {
            return null;
        }
    }

    checkUser(id, jwt) {
        const AuthStr = 'Bearer '.concat(jwt);
        console.log(AuthStr);
        return axios.get(`/users/${id}`, { headers: { Authorization: AuthStr } })
            .then(result => result.status === 200)
            .catch(err => console.log(err))
    }

    componentDidMount() {
        let auth = this.parseJWT();
        if (auth && this.checkUser(auth.id, localStorage.getItem('token'))) {
            this.props.isLogin();
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
                {testIsSelected ? <Test/> : this.props.resultIsActive ? <PersonalResaults/> : <Main/>}
                {/*<button id='enter' onClick={this.props.showEnter}>Вход</button>*/}
                {/*<button id='reg' onClick={this.props.showRegistration}>Регистрация</button>*/}
                {/* <Registration/> */}
                {/* <Enter/> */}

                {this.props.enter && <Enter/>}
                {this.props.registration && <Registration/>}
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
    }
}

export default connect(MSTP, MDTP)(App);
