import axios from "axios/index";

function parseJWT() {
    let token = localStorage.getItem('token');
    if (token) {
        let base64 = token.split('.')[1];
        return JSON.parse(window.atob(base64));
    } else {
        return null;
    }
}



function checkUser(id, jwt) {
    const AuthStr = 'Bearer '.concat(jwt);
    // console.log(AuthStr);
    return axios.get(`/users/${id}`, { headers: { Authorization: AuthStr } })
        .then(result => result.status === 200)
        .catch(err => console.log(err))
}

export default function validateUser() {
    let auth = parseJWT();
    // console.log('auth=', auth);
    return (auth && checkUser(auth.id, localStorage.getItem('token')));
}