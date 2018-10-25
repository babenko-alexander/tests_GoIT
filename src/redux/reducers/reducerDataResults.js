export default function dataResults (state = [], action){
    switch(action.type) {
        case 'DATA_SET':
            return [...action.tests, ...state];
        case 'DATA_CLEAR':
            return [];
        default: return state;
    }
}