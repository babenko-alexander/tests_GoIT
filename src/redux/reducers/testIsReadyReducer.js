export default function testIsReady (state = false, action) {
    switch (action.type) {
        case ('TESTON'):
            return true;
        case ('TESTOFF'):
            return false;
        default:
            return state;
    }
}