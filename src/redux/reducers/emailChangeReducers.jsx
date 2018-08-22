export default function emailChange (state='', action) {
    switch(action.type) {
        
        case 'EM_CHANGE':
            return action.data

        default: return state
    }
}