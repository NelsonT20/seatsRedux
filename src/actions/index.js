export function selectSeat(seat) {
    // selectBook is an ActionCreator, it needs to return an action,
    // an object with a type property
    return {
        type: 'SEAT_SELECTED',
        payload: seat
    };
}