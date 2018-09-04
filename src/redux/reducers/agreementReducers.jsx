export default function showAgreement (state = false, action) {
    switch(action.type) {
        
        case 'AGR': 
            return !state

        case 'AGRE':
            return false

        default: 
            return state
    }
}