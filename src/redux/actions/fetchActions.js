import {Object} from 'react';
import axios from 'axios';

export function fetchAllTestsData(data) {
    return {
        type: 'ALL_TESTS',
        payload: data,
    }
}

function fetchAllTests() {
    return axios.get('http://localhost:3001/tests')
        .then(result => result.status === 200 ? result : null)
        .then(result => {console.log(result.data); return result.data})
        .catch(err => console.log(err))
}

export const fetchAllTestsDataAsync = () => dispatch => {
    fetchAllTests()
        .then(tests => dispatch(fetchAllTestsData(tests)))
        .catch(err => console.log(err))
};