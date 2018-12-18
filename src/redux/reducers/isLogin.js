let initialState=false;

function parseJWT() {
    let token = localStorage.getItem('token');
    if (token) {
        initialState = true;
        let base64 = token.split('.')[1];
        return JSON.parse(window.atob(base64));
    } else {
        initialState = false;
    }
}
parseJWT();

export default function isLogin (state = initialState, action) {
    switch (action.type){
        case 'SIGN_IN':
            return true;

        case 'SIGN_OUT':
            localStorage.removeItem('token');
            return false;

        default:
            return state;
    }
}