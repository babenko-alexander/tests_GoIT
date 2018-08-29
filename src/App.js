import React, { Component } from 'react';
import {connect} from 'react-redux';
import FakeTests from './Components/FakeTests/FakeTests';

import {fetchAllTestsDataAsync} from './redux/actions/fetchActions';
import {getSingleTestAsync} from './redux/actions/testActions';
import Test from './Components/Test/Test';

import './App.css';

class App extends Component {

    componentDidMount() {
        this.props.loadAllTestsDataAsync();
        this.props.loadSingleTestAsync('HTML, CSS', 'Медиа запросы');
    };

  render() {
    return (
      <div className="App">
        <FakeTests/>
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
        loadSingleTestAsync: function(module, testname) {
          dispatch(getSingleTestAsync(module, testname))
        }
    }
}

export default connect(MSTP, MDTP) (App);