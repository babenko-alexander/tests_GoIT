export default function registration (state = false, action) {
    switch(action.type) {
        case 'REG':
            return !state
            
        default: 
            return state 
    }
}