export default function enter (state = false, action) {
    switch(action.type) {
        case 'ENT':
            return !state

        default: 
            return state 
    }
}