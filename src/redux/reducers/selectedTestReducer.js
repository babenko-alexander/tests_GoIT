export default function selectedTest (state = {}, action) {
    switch (action.type) {
        case 'SELECTED_TEST':
            return {...action.payload};
        default:
            return state;
    }
}