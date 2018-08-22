import axios from 'axios';

export function fetchAllTestsData(data) {
    return {
        type: 'ALL_TESTS',
        payload: data,
    }
}

function fetchAllTests() {
    return axios.get('http://localhost:3001/tests'
    // .then(result => {console.log(result.data[0]); return result})  // test
        .then(result => result.status === 200 ? result : null)
        .catch(err => console.log(err)))
}

export const fetchAllTestsDataAsync = () => dispatch => {
    fetchAllTests()
        .then(tests => dispatch(fetchAllTestsData(tests.data)))
        .catch(err => console.log(err))
};