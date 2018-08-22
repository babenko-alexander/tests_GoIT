import React, {Component} from 'react';
import Main from './Components/Main/Main'
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
                <Main/>
            </div>
        );
    }
}

function MSTP(state) {
    return {
        tests: state.tests,
    }
}

function MDTP(dispatch) {
    return {
        loadAllTestsDataAsync: function () {
            dispatch(fetchAllTestsDataAsync())
        },
    }
}

export default connect(MSTP, MDTP)(App);