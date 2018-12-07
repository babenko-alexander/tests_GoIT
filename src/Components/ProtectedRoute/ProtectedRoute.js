import React from "react";
// import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
// import { setMessageText } from '../../redux/actions/messageTextActions';
// import Main from '../Main/Main';

const ProtectedRoute = ({component: Component, authed, setMessageTextFunc, ...rest}) => {
    console.log(authed);
    const logggined = authed();
    // if (!authed) {
    //         setMessageTextFunc('Вы не авторизированы!');
    // } else {

        return (
            <Route
                {...rest}
                render={(props) => authed
                    ? (<Component {...props} />)
                    : (<Redirect to={
                        {
                            pathname: '/',
                            state: {from: props.location}
                        }
                    }/>)}
            />
        )
    // }

// };

    // function MDTP(dispatch) {
    // return {
    //     setMessageTextFunc: function (message) {
    //         dispatch(setMessageText(message))
    //     },
    // }
};

export default ProtectedRoute;