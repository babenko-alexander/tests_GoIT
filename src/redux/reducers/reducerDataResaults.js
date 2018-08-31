export default function data (state = [], action){
    switch(action.type){
        case 'data':
        return [...action.tests, ...state];
        default: return state;
    }
}