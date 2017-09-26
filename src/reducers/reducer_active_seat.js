//state argument is not application state, only the state
// this reducer is responsible for
export default function(state = null, action) {
    switch (action.type) {
        case 'SEAT_SELECTED':
            return action.payload;
            break;
    }
    return state;
}