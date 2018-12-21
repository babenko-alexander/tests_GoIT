import React, {Component} from 'react';
import { Route, Switch} from 'react-router';
// import { ConnectedRouter } from 'connected-react-router';

// import { createBrowserHistory } from 'history';

import {connect} from 'react-redux';
import axios from 'axios';
import MessageBox from './Components/MessageBox/MessageBox';
import Header from './Components/Header/Header';
import Registration from './Components/Registration/Registration';
import Main from './Components/Main/Main';
import Test from './Components/Test/Test';
import Tests from './Components/Tests/Tests';
import Enter from './Components/Enter/Enter';
import PersonalResults from './Components/PersonalResults/PersonalResults';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

// import store, {history} from './redux/store/store';

import {fetchModulesDataAsync} from './redux/actions/modulesAction';
import {fetchAllTestsDataAsync} from './redux/actions/testsAction';
import {addCurrentCorrectResult} from './redux/actions/currentCorrectResultActions';
import {showEnter} from './redux/actions/enterAction';
import {showRegistration} from './redux/actions/registrationAction';
import {isLogin} from './redux/actions/isLogin';
import {getUserAuthHeader, getUserId,  checkUser} from './helpers/userValidation';
import {dataResult} from './redux/actions/actionDataResults';

import styles from './App.css';


class App extends Component {
    componentDidMount() {
        localStorage.getItem('token') !== null && checkUser()
          .then(authResult => authResult === 200 && this.props.isLoginFunc() && true)
          .then(data => data === true && axios.get(`/users/${getUserId()}`, getUserAuthHeader())
            .then(data => this.props.dataResultFunc(data.data.results)))
          .catch(err => console.log(err));

        this.props.loadModulesDataAsync();
        this.props.loadAllTestsDataAsync();
    };


    isLoginHandler = () => {
        console.log(this.props.isLogin);
        return this.props.isLogin
    };

    // loginhandler2 = ()=> setTimeout(this.isLoginHandler,3000);


    componentDidUpdate() {
        const testIsSelected = Object.keys(this.props.selectedTest).length > 0;
        if (testIsSelected) {
            let correctAnswerData = this.props.selectedTest.questions.map(el => el.rightAnswer);
            this.props.addCurrentCorrectResult(correctAnswerData)
        }
        // console.log('Update', this.props);
    };

    render() {
        //const testIsSelected = Object.keys(this.props.selectedTest).length > 0;
        // console.log('render');
            return (
                <div className={styles.App}>
                    {/* TODO: use routes instead */}
                    <Header/>

                    <Switch>
                        <Route exact path="/" component={Main} />
                        {/*<Route path="/tests" component={Tests} />*/}
                        <ProtectedRoute exact path='/tests' authed={this.props.isLogin} component={Tests}/>
                        <ProtectedRoute path="/tests/:id" authed={this.props.isLogin} component={Test} />
                        {/*<Route component={<MessageBox>Страница не найдена</MessageBox>}/>*/}
                    </Switch>

                    {/*{testIsSelected ? <Test/> : <Main/>}*/}
                    {/*<button id='enter' onClick={this.props.showEnter}>Вход</button>*/}
                    {/*<button id='reg' onClick={this.props.showRegistration}>Регистрация</button>*/}
                    {/* <Registration/> */}
                    {/* <Enter/> */}

                    {/*<NavLink to="/">*/}
                    {/*<Main />*/}
                    {/*</NavLink>*/}

                    {this.props.enter && <Enter/>}
                    {this.props.registration && <Registration/>}
                    {this.props.messageText && <MessageBox/>}
                    {this.props.resultIsActive &&  <PersonalResults/>}
                </div>
            )
    }

}


function MSTP(state) {
    return {
        tests: state.tests,
        selectedTest: state.selectedTest,
        enter: state.enter,
        registration: state.registration,
        resultIsActive: state.resultIsActive,
        messageText: state.messageText,
        router: state.router,
        isLogin: state.isLogin
    }
}

function MDTP(dispatch) {
    return {
        loadModulesDataAsync: function() {
            dispatch(fetchModulesDataAsync())
        },
        loadAllTestsDataAsync: function() {
            dispatch(fetchAllTestsDataAsync())
        },
        addCurrentCorrectResult: function (data) {
            dispatch(addCurrentCorrectResult(data))
        },

        showEnter: function() {
            dispatch(showEnter())
        },
        showRegistration: function() {
            dispatch(showRegistration())
        },
        isLoginFunc: function () {
            dispatch(isLogin())
        },
        dataResultFunc: function(data){
            dispatch(dataResult(data))
        },
    }
}

export default connect(MSTP, MDTP)(App);
