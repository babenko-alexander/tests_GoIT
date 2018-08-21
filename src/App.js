import React, { Component } from 'react';
// import './App.css';
import styles from './App.css';
import PersonalResault from './Components/PersonalResaults/PersonalResaults';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
      <PersonalResault/>
      </div>
    );
  }
}

export default App;
