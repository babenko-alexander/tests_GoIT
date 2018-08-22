import React, { Component } from 'react';
import Registration from './Components/Registration/Registration'
import Enter from './Components/Enter/Enter'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Registration/>
        {/* <Enter/> */}
      </div>
    );
  }
}

export default App;
