export default function dataResaults (state = [], action){
    switch(action.type){
        case 'data':
        return [...action.tests, ...state];
        default: return state;
    }
}