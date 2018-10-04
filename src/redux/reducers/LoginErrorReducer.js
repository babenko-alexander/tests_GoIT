export default function loginError(state = false, action) {
    switch (action.type){
        case 'LOGIN_ERROR':
            console.log(state);

            return true;
        default:
            return state;
    }
}