export default function checkBoxIsActive (state = false, action) {
    switch(action.type) {

        case 'CHECKBOX_ACTIVE': 
            return !state

        default: return state
    }
}