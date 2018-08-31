export default function currentAnswer(state = [
    //1,1,1,1,1,1,1,1,1,1
], action) {
    switch (action.type) {
        case ('ANSWERSAREREADY'):
            state[action.index] = action.data;
            return state;
        default:
            return state;
    }
}