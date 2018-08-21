import React, { Component } from 'react';
import './App.css';
import ModalChild from './Components/ModalChild/ModalChild';

class App extends Component {
  
  
  render() {
    return (
      <div className="App">
        <button onClick={this.showModal}>Show</button>
        <ModalChild/>
      </div>
    );
  }
}

export default App;
