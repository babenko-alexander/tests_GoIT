import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchAllTestsDataAsync} from './redux/actions/fetchActions';
import {addCurrentCorrectResult} from './redux/actions/currentCorrectResultActions';
import Main from './Components/Main/Main';
import Test from './Components/Test/Test';

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
            </div>
        );
    }
}

function MSTP(state) {
    return {
        tests: state.tests,
        selectedTest: state.selectedTest,
    }
}

function MDTP(dispatch) {
    return {
        loadAllTestsDataAsync: function() {
            dispatch(fetchAllTestsDataAsync())
        },
        addCurrentCorrectResult: function (data) {
            dispatch(addCurrentCorrectResult(data))
        }
    }
}

export default connect(MSTP, MDTP)(App);