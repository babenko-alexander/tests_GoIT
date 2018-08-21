export default function currentResult (state = [], action) {
    switch (action.type) {
        case ('TESTISREADY'):
            state[action.index] = action.data;
            return state;
        default:
            return state;
    }

}