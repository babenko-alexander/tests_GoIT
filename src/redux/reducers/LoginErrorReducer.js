export default function loginError(state = false, action) {
    switch (action.type){
        case 'LOGIN_ERROR_SET':
            // console.log(state);
            return true;

        case 'LOGIN_ERROR_CLEAR':
            return false;

        default:
            return state;
    }
}