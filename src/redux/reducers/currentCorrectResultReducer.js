export default function correctResult(state = [
    'answer1', 'answer2', 'answer3', 'answer4', 'answer1', 'answer2', 'answer3', 'answer4', 'answer1', 'answer2',
], action) {
    switch (action.type) {
        case 'CORRECTRESULTISREADY':
            return action.data;
        default:
            return state;
    }
}