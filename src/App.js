import React, { Component } from 'react';
import {connect} from 'react-redux'
import {showEnter} from './redux/actions/enterAction'
import {showRegistration} from './redux/actions/registrationAction'
import Registration from './Components/Registration/Registration'
import Enter from './Components/Enter/Enter'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <button id='enter' onClick={this.props.showEnter}>Вход</button>
      <button id='reg' onClick={this.props.showRegistration}>Регистрация</button>
        {/* <Registration/> */}
        {/* <Enter/> */}

      {this.props.enter && <Enter/>}
      {this.props.registration && <Registration/>}
      </div>
  )}
}

function MSTP (state) {
  return {
    enter: state.enter,
    registration: state.registration
  }
}

function MDTP (dispatch) {
  return {
    showEnter: function() {
      dispatch(showEnter())
    },

    showRegistration: function() {
      dispatch(showRegistration())
    }
  }
}

export default connect(MSTP, MDTP) (App);
