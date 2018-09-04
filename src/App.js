import React, { Component } from 'react';
import {connect} from 'react-redux'
import Registration from './Components/Registration/Registration'
import Enter from './Components/Enter/Enter'
// import './App.css';
import Header from './Components/Header/Header'
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header/>
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


export default connect(MSTP, null) (App);
