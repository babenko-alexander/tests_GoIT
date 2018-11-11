import React from "react";
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import {clearMessageText, setMessageText} from '../../redux/actions/messageTextActions';


const ProtectedRoute = ({component: Component, authed, setMessageTextFunc, ...rest}) => {
    if (!authed) {
        setMessageTextFunc('Вы не авторизированы!');
    } else {

        return (
            <Route
                {...rest}
                render={(props) => authed
                    ? <Component {...props} />
                    : <Redirect to= {
                        {
                            pathname: '/',
                        }
                    }/>} />
        )
    }
};

    function MDTP(dispatch) {
    return {
        setMessageTextFunc: function (message) {
            dispatch(setMessageText(message))
        },
    }
}

export default connect(null, MDTP)(ProtectedRoute);