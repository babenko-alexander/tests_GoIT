export default function errorMessage(state = false, action) {
    switch (action.type){
        case 'ERROR_SET':
            // console.log(state);
            return true;

        case 'ERROR_CLEAR':
            return false;

        default:
            return state;
    }
}