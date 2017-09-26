import { combineReducers } from 'redux';
import SeatsReducer from './reducer_Seats';
import ActiveSeat from './reducer_active_seat';

const rootReducer = combineReducers({
  seats: SeatsReducer,
  activeSeat: ActiveSeat
});

export default rootReducer;
