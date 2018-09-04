export default function checkBoxIsActive (state = false, action) {
    switch(action.type) {

        case 'CHECKBOX_ACTIVE': 
            return !state

        case 'CHECKBOX_DISACTIVE':
            return false

        default: return state
    }
}