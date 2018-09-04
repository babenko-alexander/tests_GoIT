export default function showAgreement (state = false, action) {
    switch(action.type) {
        
        case 'AGR': 
            return !state
        default: 
            return state
    }
}