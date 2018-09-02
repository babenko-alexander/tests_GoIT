import React, {Component} from 'react';
import {connect} from 'react-redux';

import Main from './Components/Main/Main';

import {fetchAllTestsDataAsync} from './redux/actions/fetchActions';
import {addCurrentCorrectResult} from './redux/actions/currentCorrectResultActions';
import Test from './Components/Test/Test';

import './App.css';

class App extends Component {

    componentDidMount() {
        this.props.loadAllTestsDataAsync();
    };

     render() {
         const testIsReady = Object.keys(this.props.selectedTest).length > 0;
         // console.log('testIsReady: ', testIsReady);
         if (testIsReady) {
             let correctAnswerData = this.props.selectedTest.questions.map(el => el.rightAnswer);
             this.props.addCurrentCorrectResult(correctAnswerData)
         }

         return (
            <div className="App">
                {testIsReady ? <Test/> : <Main/>}
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