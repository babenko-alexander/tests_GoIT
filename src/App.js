import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchAllTestsDataAsync} from './redux/actions/fetchActions';
import './App.css';

class App extends Component {

    componentDidMount() {
        this.props.loadAllTestsDataAsync();
    };

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

function MSTP(state) {
    return {
        tests: state.tests,
    }
}

function MDTP (dispatch) {
    return {
        loadAllTestsDataAsync: function() {
            dispatch(fetchAllTestsDataAsync())
        },
    }
}

export default connect(MSTP, MDTP) (App);