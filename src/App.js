import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchAllTestsDataAsync} from './redux/actions/fetchActions';
import {getSingleTestAsync} from './redux/actions/testActions';
import Test from './Components/Test/Test';
import Main from './Components/Main/Main';
import './App.css';

class App extends Component {

    componentDidMount() {
        this.props.loadAllTestsDataAsync();
        this.props.loadSingleTestAsync('HTML, CSS', 'Медиа запросы'); // вызывается из Main component
    };

  render() {
    return (
      <div className="App">
          <Main/>
        {/*<Test/>*/}
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