import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchModulesDataAsync} from './redux/actions/modulesAction';
import {fetchAllTestsDataAsync} from './redux/actions/testsAction';
import {addCurrentCorrectResult} from './redux/actions/currentCorrectResultActions';
import Header from './Components/Header/Header';
import Registration from './Components/Registration/Registration';
import Main from './Components/Main/Main';
import Test from './Components/Test/Test';
import Enter from './Components/Enter/Enter';

import {showEnter} from './redux/actions/enterAction';
import {showRegistration} from './redux/actions/registrationAction';

import styles from './App.css';



class App extends Component {

    componentDidMount() {
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
    }
}

export default connect(MSTP, MDTP)(App);
