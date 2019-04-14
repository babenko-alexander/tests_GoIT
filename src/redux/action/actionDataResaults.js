import axios from 'axios';
export const dataResault = (tests) => ({
    type: 'data',
    tests,
});


const getDataResault = () => axios.get('http://localhost:3001/results').then(({data,status})=>{if(status === 200){return data}});

export const getDataAsync=()=> dispatch=>{
    getDataResault()
    .then(data=>dispatch(dataResault(data)));
};


// Collapse 

// Message Input

// Message #random

// Files

