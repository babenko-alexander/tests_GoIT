export const setSelectedTest = function (selectedTestObj) {
    return {
        type: 'SELECTED_TEST',
        payload: selectedTestObj
    }
};

export const unSelectedTest = function () {
    return {
        type: 'UNSELECTED_TEST',
        payload: {}
    }
}

// original version:
/*
import axios from 'axios';

export function selectedTest (data) {
    return {
        type: 'SELECTED_TEST',
        payload: data
    }
}

function getSingleTest(module, testname) {
    return axios.get('http://localhost:3001/tests')
    // .then(result => {console.log(result.data); return result})  // test
        .then(result => result.status === 200 ? result : null)
        // .then(result => {console.log(result.data); return result.data})
        .then(result => result.data.find(el => el.module === module)['module-tests'].find(el=> el['test-name']===testname))
        .catch(err => console.log(err))
}

export const getSingleTestAsync = (module, testname) => dispatch => {
    getSingleTest(module, testname)
        .then(test => dispatch(selectedTest({'module': module, ...test})))
        .catch(err => console.log(err))
};
*/
