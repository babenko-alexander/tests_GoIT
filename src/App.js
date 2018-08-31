import React, { Component } from 'react';
import {connect} from 'react-redux';

import {fetchAllTestsDataAsync} from './redux/actions/fetchActions';
// import {getSingleTestAsync} from './redux/actions/testActions';
import {addCurrentCorrectResult} from './redux/actions/currentCorrectResultActions';
import Test from './Components/Test/Test';

import './App.css';

class App extends Component {

    componentDidMount() {
        this.props.loadAllTestsDataAsync();
        // this.props.loadSingleTestAsync('HTML, CSS', 'Медиа запросы');
        let correctAnswerData = this.props.selectedTest.questions.map(el => el.rightAnswer);
        this.props.addCurrentCorrectResult(correctAnswerData)
    };

  render() {
    return (
      <div className="App">
        <Test/>
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

function MDTP (dispatch) {
    return {
        loadAllTestsDataAsync: function() {
            dispatch(fetchAllTestsDataAsync())
        },
        // loadSingleTestAsync: function(module, testname) {
        //   dispatch(getSingleTestAsync(module, testname))
        // },
        addCurrentCorrectResult: function (data) {
            dispatch(addCurrentCorrectResult(data))
        }
    }
}

export default connect(MSTP, MDTP) (App);