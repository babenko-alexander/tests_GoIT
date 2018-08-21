import React, { Component } from 'react';
import Header from './Components/Header/Header'
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header/>
      </div>
    );
  }
}

export default App;
