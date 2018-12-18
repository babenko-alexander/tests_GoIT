import axios from "axios";

const TOKEN = localStorage.getItem('token');

function parseJWT() {
    if (TOKEN) {
        let base64 = TOKEN.split('.')[1];
        return JSON.parse(window.atob(base64));
    } else {
        return false;
    }
}

export function checkUser() {
    let auth = parseJWT();
        const AuthStr = 'Bearer '.concat(TOKEN);
        // console.log(AuthStr);
        return axios.get(`/users/${auth.id}`, { headers: { Authorization: AuthStr } })
            .then(result => console.log(result.status))
            .catch(err => {console.log(err)});
}

// export function validateUser() {
//     let auth = parseJWT();
//     // debugger
//     return !auth ?
//         false :
//         checkUser(auth.id, TOKEN)
// }

export function getUserAuthHeader() {
    const AuthStr = 'Bearer '.concat(localStorage.getItem('token'));
    return { headers: { Authorization: AuthStr}}
}

export function getUserId() {
    let auth = parseJWT();
    return !auth?
        false :
        auth.id
}