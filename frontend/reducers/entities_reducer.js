import { combineReducers } from 'redux';

import UsersReducer from './users_reducer';
import ListingsReducer from './listings_reducer';
import BookingsReducer from './bookings_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    listings: ListingsReducer,
    bookings: BookingsReducer,
})

export default EntitiesReducer;