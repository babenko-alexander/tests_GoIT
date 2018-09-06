import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchAllTestsDataAsync} from './redux/actions/fetchActions';
import {addCurrentCorrectResult} from './redux/actions/currentCorrectResultActions';
import Main from './Components/Main/Main';
import Test from './Components/Test/Test';

import {showEnter} from './redux/actions/enterAction';
import {showRegistration} from './redux/actions/registrationAction';
// import Registration from './Components/Registration/Registration';
// import Registration from './Components/Registration/Registration';
import Enter from './Components/Enter/Enter';

import './App.css';

class App extends Component {

    componentDidMount() {
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
            <div className="App">
                {/* TODO: use routes instead */}
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
