export default function passChange (state='', action) {
    switch(action.type) {

        case 'PASS_CHANGE':
            return action.data

        default: return state
    }
}